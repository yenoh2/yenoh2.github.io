/*
 * Carina's Idea Box — voice-first feedback with gameplay telemetry.
 *
 * Modeled on the City Builder pilot: the lightbulb pauses the game and opens
 * a big friendly dialog; Chrome's built-in speech recognition streams words
 * into an editable box (typing always works too). Each sent idea is saved
 * with a snapshot of the game state and the recent event timeline, so Dad
 * can export one JSON file and feed it back to Claude for the next
 * iteration. Everything lives in localStorage — no network, no accounts.
 */
const ChompyFeedback = (() => {
  const FEEDBACK_KEY = 'chompy-feedback-v1';
  const SESSIONS_KEY = 'chompy-sessions-v1';
  const MAX_FEEDBACK = 300;
  const MAX_SESSIONS = 40;
  const MAX_EVENTS = 500;

  const sessionId = 'session-' + Date.now();
  const startedAt = new Date().toISOString();
  const events = [];
  let getGameContext = () => ({});

  function logEvent(type, data) {
    events.push({ t: Math.round(performance.now() / 100) / 10, type, ...(data || {}) });
    if (events.length > MAX_EVENTS) events.splice(0, events.length - MAX_EVENTS);
  }

  function readStore(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
      return [];
    }
  }

  function writeStore(key, list, max) {
    try {
      localStorage.setItem(key, JSON.stringify(list.slice(-max)));
    } catch {
      /* storage full or blocked — feedback is best-effort */
    }
  }

  function saveSessionSummary() {
    const list = readStore(SESSIONS_KEY).filter((s) => s.sessionId !== sessionId);
    list.push({
      sessionId,
      startedAt,
      lastSeenAt: new Date().toISOString(),
      game: getGameContext(),
      eventCount: events.length,
    });
    writeStore(SESSIONS_KEY, list, MAX_SESSIONS);
  }

  function recordFeedback(text, viaVoice) {
    const list = readStore(FEEDBACK_KEY);
    list.push({
      id: 'idea-' + Date.now(),
      when: new Date().toISOString(),
      sessionId,
      text,
      viaVoice,
      game: getGameContext(),
      recentEvents: events.slice(-80),
    });
    writeStore(FEEDBACK_KEY, list, MAX_FEEDBACK);
    saveSessionSummary();
  }

  function exportAll() {
    const payload = {
      exportedAt: new Date().toISOString(),
      note: "Carina's Chompy Game feedback export — paste this file to Claude to iterate on the game.",
      feedback: readStore(FEEDBACK_KEY),
      sessions: readStore(SESSIONS_KEY),
      currentSession: { sessionId, startedAt, game: getGameContext(), events },
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chompy-ideas-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  // --- dialog UI -----------------------------------------------------------
  let recognition = null;
  let listening = false;
  let usedVoice = false;
  let onCloseCb = null;

  function speechAvailable() {
    return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  function stopListening() {
    if (recognition) {
      try {
        recognition.stop();
      } catch {}
      recognition = null;
    }
    listening = false;
    const mic = document.getElementById('ideaMic');
    if (mic) {
      mic.classList.remove('listening');
      mic.textContent = '🎙️ Talk';
    }
  }

  function toggleListening() {
    const mic = document.getElementById('ideaMic');
    const box = document.getElementById('ideaText');
    if (listening) {
      stopListening();
      return;
    }
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Rec) return;
    recognition = new Rec();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true;
    const baseText = box.value;
    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      box.value = baseText + (baseText && transcript ? ' ' : '') + transcript;
      usedVoice = true;
      syncSendState();
    };
    recognition.onend = () => stopListening();
    recognition.onerror = () => stopListening();
    recognition.start();
    listening = true;
    mic.classList.add('listening');
    mic.textContent = '🔴 Listening… tap when done';
  }

  function syncSendState() {
    const box = document.getElementById('ideaText');
    const send = document.getElementById('ideaSend');
    send.disabled = !box.value.trim();
  }

  function open(onClose) {
    onCloseCb = onClose;
    usedVoice = false;
    const overlay = document.getElementById('ideaOverlay');
    const box = document.getElementById('ideaText');
    const mic = document.getElementById('ideaMic');
    box.value = '';
    overlay.classList.remove('hidden');
    document.getElementById('ideaThanks').classList.add('hidden');
    document.getElementById('ideaForm').classList.remove('hidden');
    mic.style.display = speechAvailable() ? '' : 'none';
    syncSendState();
    logEvent('ideaBoxOpened');
    // Voice-first for a six-year-old: start listening immediately.
    if (speechAvailable()) toggleListening();
  }

  function close() {
    stopListening();
    document.getElementById('ideaOverlay').classList.add('hidden');
    if (onCloseCb) onCloseCb();
  }

  function send() {
    const box = document.getElementById('ideaText');
    const text = box.value.trim();
    if (!text) return;
    stopListening();
    recordFeedback(text, usedVoice);
    logEvent('ideaSent', { chars: text.length });
    // Show the "mail sent" thank-you beat, then close.
    document.getElementById('ideaForm').classList.add('hidden');
    document.getElementById('ideaThanks').classList.remove('hidden');
    setTimeout(close, 1600);
  }

  function wire(contextFn) {
    getGameContext = contextFn;
    document.getElementById('ideaMic').addEventListener('click', toggleListening);
    document.getElementById('ideaSend').addEventListener('click', send);
    document.getElementById('ideaCancel').addEventListener('click', close);
    document.getElementById('ideaExport').addEventListener('click', exportAll);
    document.getElementById('ideaText').addEventListener('input', syncSendState);
    window.addEventListener('beforeunload', saveSessionSummary);
  }

  return { wire, open, logEvent, exportAll };
})();

// Console access for Dad: ChompyFeedback.exportAll()
window.ChompyFeedback = ChompyFeedback;
