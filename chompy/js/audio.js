/*
 * All sound is synthesized with the Web Audio API — no files, works offline.
 * Everything is gentle and quiet on purpose (kindergarten ears).
 * The AudioContext is created lazily on the first user gesture.
 */
const ChompyAudio = (() => {
  let ctx = null;
  let master = null;
  let musicGain = null;
  let musicTimer = null;
  let muted = localStorage.getItem('chompy-muted') === '1';

  function ensure() {
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume();
      return true;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = muted ? 0 : 0.5;
    master.connect(ctx.destination);
    musicGain = ctx.createGain();
    musicGain.gain.value = 0.14;
    musicGain.connect(master);
    startMusic();
    return true;
  }

  function tone({ freq = 440, end = freq, time = 0, dur = 0.15, type = 'sine', vol = 0.3, dest = master }) {
    if (!ctx) return;
    const t0 = ctx.currentTime + time;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (end !== freq) osc.frequency.exponentialRampToValueAtTime(Math.max(end, 1), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(dest);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  function noise({ time = 0, dur = 0.12, vol = 0.2, filterFreq = 900, type = 'lowpass' }) {
    if (!ctx) return;
    const t0 = ctx.currentTime + time;
    const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = filterFreq;
    const g = ctx.createGain();
    g.gain.value = vol;
    src.connect(filter).connect(g).connect(master);
    src.start(t0);
  }

  // --- sound effects -------------------------------------------------------

  /** Soft pop when the mouth opens. */
  function open() {
    if (!ensure()) return;
    tone({ freq: 300, end: 420, dur: 0.07, type: 'triangle', vol: 0.18 });
  }

  /** Funny chomp + gulp when the Runner is caught. */
  function chomp() {
    if (!ensure()) return;
    noise({ dur: 0.09, vol: 0.3, filterFreq: 700 });
    tone({ freq: 230, end: 80, dur: 0.13, type: 'square', vol: 0.14 });
    tone({ freq: 170, end: 55, time: 0.13, dur: 0.16, type: 'sine', vol: 0.3 }); // gulp
    // cheerful ding right after
    tone({ freq: 660, time: 0.24, dur: 0.18, vol: 0.16 });
    tone({ freq: 880, time: 0.32, dur: 0.22, vol: 0.16 });
  }

  /** Slide-whistle "wheee" + boing when the Runner escapes. */
  function escape() {
    if (!ensure()) return;
    tone({ freq: 380, end: 950, dur: 0.34, type: 'sine', vol: 0.2 });
    tone({ freq: 200, end: 70, time: 0.36, dur: 0.18, type: 'triangle', vol: 0.18 });
    tone({ freq: 500, end: 620, time: 0.5, dur: 0.08, type: 'sine', vol: 0.1 });
  }

  /** Little fanfare + shimmer for winning a round. */
  function fanfare() {
    if (!ensure()) return;
    const notes = [523, 659, 784, 1047];
    notes.forEach((f, i) =>
      tone({ freq: f, time: i * 0.12, dur: 0.28, type: 'triangle', vol: 0.22 })
    );
    tone({ freq: 1319, time: 0.5, dur: 0.4, vol: 0.12 });
    noise({ time: 0.45, dur: 0.5, vol: 0.06, filterFreq: 5000, type: 'highpass' });
  }

  /** Warm, kind two-note "good try" — never sad-trombone harsh. */
  function timeUp() {
    if (!ensure()) return;
    tone({ freq: 392, dur: 0.3, type: 'sine', vol: 0.2 });
    tone({ freq: 330, time: 0.28, dur: 0.45, type: 'sine', vol: 0.2 });
  }

  /** Tiny woodblock tick for the final seconds. */
  function tick() {
    if (!ensure()) return;
    noise({ dur: 0.03, vol: 0.1, filterFreq: 2500, type: 'highpass' });
  }

  /** Pop for a new Runner appearing. */
  function spawn() {
    if (!ensure()) return;
    tone({ freq: 500, end: 780, dur: 0.1, type: 'sine', vol: 0.12 });
  }

  // --- background music ----------------------------------------------------
  // A soft marimba-ish arpeggio loop (C – G – Am – F), scheduled in chunks.
  const CHORDS = [
    [261.6, 329.6, 392.0, 523.3],
    [196.0, 246.9, 293.7, 392.0],
    [220.0, 261.6, 329.6, 440.0],
    [174.6, 220.0, 261.6, 349.2],
  ];
  let musicStep = 0;
  let nextNoteTime = 0;

  function pluck(freq, time) {
    const t0 = time;
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc2.type = 'sine';
    osc.frequency.value = freq;
    osc2.frequency.value = freq * 2.005; // soft, slightly detuned octave
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.5, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.55);
    osc.connect(g);
    osc2.connect(g);
    const o2g = ctx.createGain();
    o2g.gain.value = 0.25;
    osc2.disconnect();
    osc2.connect(o2g).connect(g);
    g.connect(musicGain);
    osc.start(t0);
    osc2.start(t0);
    osc.stop(t0 + 0.6);
    osc2.stop(t0 + 0.6);
  }

  function scheduleMusic() {
    if (!ctx) return;
    const beat = 0.32;
    while (nextNoteTime < ctx.currentTime + 0.6) {
      const chord = CHORDS[Math.floor(musicStep / 8) % CHORDS.length];
      const pattern = [0, 2, 1, 3, 0, 2, 3, 1];
      pluck(chord[pattern[musicStep % 8]], nextNoteTime);
      nextNoteTime += beat;
      musicStep++;
    }
  }

  function startMusic() {
    if (musicTimer) return;
    nextNoteTime = ctx.currentTime + 0.1;
    musicTimer = setInterval(scheduleMusic, 250);
  }

  function setMuted(m) {
    muted = m;
    localStorage.setItem('chompy-muted', m ? '1' : '0');
    if (master) master.gain.value = m ? 0 : 0.5;
  }

  return {
    ensure,
    open,
    chomp,
    escape,
    fanfare,
    timeUp,
    tick,
    spawn,
    setMuted,
    isMuted: () => muted,
  };
})();
