/**
 * Metronome MVP
 * Main Logic
 */

// --- Constants & Global State ---
const MIN_BPM = 20;
const MAX_BPM = 300;
let bpm = 120;
let isPlaying = false;
let timeSignature = 4;
let subdivision = 1;
let isAccentEnabled = false;
let currentBeat = 0;
let nextNoteTime = 0.0;
const scheduleAheadTime = 0.1;

// Audio Context
let audioCtx = null;

// DOM Elements
const bpmValueEl = document.getElementById('bpmValue');
const tempoMarkingEl = document.getElementById('tempoMarking');
const playButton = document.getElementById('playButton');
const beatIndicatorsEl = document.getElementById('beatIndicators');
const tempoDial = document.getElementById('tempoDial');
const dialKnob = document.getElementById('dialKnob');
const timeSigSelect = document.getElementById('timeSignature');
const subdivSelect = document.getElementById('subdivision');
const accentToggle = document.getElementById('accentToggle');

// --- Initialization ---

function init() {
    loadSettings();
    updateUI();
    setupEventListeners();
    setupDial();
    setupQuickPickTempos();
}

// --- Audio Engine ---

function unlockAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

// Woodblock Synthesis
function playClick(time, beatNumber) {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const isAccent = isAccentEnabled && (beatNumber % timeSignature === 0);
    // Standard woodblock frequencies: ~800Hz (high/accent), ~600Hz (low)
    // Adjusting for a pleasant digital woodblock
    const baseFreq = isAccent ? 1200 : 800;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, time);
    // Slight pitch drop for "thwack" attack
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.8, time + 0.02);

    // Envelope: Sharp attack, quick exponential decay
    gainNode.gain.setValueAtTime(0, time);
    gainNode.gain.linearRampToValueAtTime(isAccent ? 1.0 : 0.7, time + 0.001);
    gainNode.gain.exponentialRampToValueAtTime(0.001, time + 0.1);

    osc.start(time);
    osc.stop(time + 0.1);

    // Animate visual
    const drawTime = (time - audioCtx.currentTime) * 1000;
    setTimeout(() => {
        updateBeatVisuals(beatNumber);
    }, Math.max(0, drawTime));
}

function nextNote() {
    const secondsPerBeat = 60.0 / bpm;
    const interval = secondsPerBeat / subdivision;
    nextNoteTime += interval;

    currentBeat++;
    if (currentBeat >= timeSignature * subdivision) {
        currentBeat = 0;
    }
}

function scheduler() {
    while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
        playClick(nextNoteTime, currentBeat);
        nextNote();
    }
    if (isPlaying) {
        requestAnimationFrame(scheduler);
    }
}
// --- Wake Lock ---
let wakeLock = null;

async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
            wakeLock.addEventListener('release', () => {
                console.log('Wake Lock was released');
            });
            console.log('Wake Lock is active');
        }
    } catch (err) {
        console.error(`${err.name}, ${err.message}`);
    }
}

async function releaseWakeLock() {
    if (wakeLock !== null) {
        await wakeLock.release();
        wakeLock = null;
    }
}

// Handle visibility change
document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'hidden') {
        await releaseWakeLock();
    }
});

function togglePlay() {
    unlockAudioContext();
    isPlaying = !isPlaying;

    if (isPlaying) {
        currentBeat = 0;
        nextNoteTime = audioCtx.currentTime + 0.05;
        playButton.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
        requestWakeLock();
        scheduler();
    } else {
        playButton.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48"><path d="M8 5v14l11-7z"/></svg>`;
        releaseWakeLock();
        resetVisuals();
    }
}

// --- UI Logic ---

function updateUI() {
    bpmValueEl.textContent = Math.round(bpm);
    updateTempoMarking();
    updateDialPosition();
    updateBeatIndicators();
    updateQuickPickActive();
}

function updateBeatIndicators() {
    beatIndicatorsEl.innerHTML = '';
    for (let i = 0; i < timeSignature; i++) {
        const dot = document.createElement('div');
        dot.className = 'beat-dot';
        if (i === 0 && isAccentEnabled) dot.classList.add('accent');
        dot.id = `beat-${i}`;
        beatIndicatorsEl.appendChild(dot);
    }
}

function updateBeatVisuals(beatIndex) {
    const majorBeat = Math.floor(beatIndex / subdivision);
    const subBeat = beatIndex % subdivision;

    // Reset all
    document.querySelectorAll('.beat-dot').forEach(d => d.classList.remove('active'));

    if (subBeat === 0) {
        const dot = document.getElementById(`beat-${majorBeat}`);
        if (dot) dot.classList.add('active');
    }
}

function resetVisuals() {
    document.querySelectorAll('.beat-dot').forEach(d => d.classList.remove('active'));
}

function updateTempoMarking() {
    let text = "Moderato";
    if (bpm < 60) text = "Largo";
    else if (bpm < 100) text = "Andante";
    else if (bpm < 120) text = "Moderato";
    else if (bpm < 160) text = "Allegro";
    else text = "Presto";
    tempoMarkingEl.textContent = text;
}

function updateDialPosition() {
    // Calculate angle based on BPM
    const range = MAX_BPM - MIN_BPM;
    const normalized = (bpm - MIN_BPM) / range;
    const angle = normalized * 270 - 135; // -135° to +135°

    const radius = 125; // Distance from center
    const radians = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);

    dialKnob.style.left = `calc(50% + ${x}px)`;
    dialKnob.style.top = `calc(50% + ${y}px)`;
}

// --- Dial Interaction ---
let isDragging = false;

function setupDial() {
    const onMove = (clientX, clientY) => {
        const rect = tempoDial.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = clientX - centerX;
        const dy = clientY - centerY;

        let angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Constrain to -135° to +135°
        if (angle < -135) angle = -135;
        if (angle > 135) angle = 135;

        const normalized = (angle + 135) / 270;
        bpm = MIN_BPM + normalized * (MAX_BPM - MIN_BPM);
        bpm = Math.max(MIN_BPM, Math.min(MAX_BPM, bpm));

        updateUI();
        saveSettings();
    };

    tempoDial.addEventListener('mousedown', (e) => {
        isDragging = true;
        onMove(e.clientX, e.clientY);
    });

    tempoDial.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        onMove(touch.clientX, touch.clientY);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) onMove(e.clientX, e.clientY);
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            onMove(touch.clientX, touch.clientY);
        }
    });

    document.addEventListener('mouseup', () => isDragging = false);
    document.addEventListener('touchend', () => isDragging = false);
}

// --- Event Listeners ---
function setupEventListeners() {
    playButton.addEventListener('click', togglePlay);

    timeSigSelect.addEventListener('change', (e) => {
        timeSignature = parseInt(e.target.value);
        currentBeat = 0;
        updateBeatIndicators();
        saveSettings();
    });

    subdivSelect.addEventListener('change', (e) => {
        subdivision = parseInt(e.target.value);
        currentBeat = 0;
        saveSettings();
    });

    accentToggle.addEventListener('change', (e) => {
        isAccentEnabled = e.target.checked;
        updateBeatIndicators();
        saveSettings();
    });
}

// --- Quick Pick Tempos ---
function setupQuickPickTempos() {
    const tempoButtons = document.querySelectorAll('.tempo-btn');

    tempoButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetBpm = parseInt(btn.dataset.bpm);
            bpm = targetBpm;
            updateUI();
            updateQuickPickActive();
            saveSettings();
        });
    });
}

function updateQuickPickActive() {
    const tempoButtons = document.querySelectorAll('.tempo-btn');
    const currentBpm = Math.round(bpm);

    tempoButtons.forEach(btn => {
        const btnBpm = parseInt(btn.dataset.bpm);
        if (btnBpm === currentBpm) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function loadSettings() {
    const savedBpm = localStorage.getItem('metronome_bpm');
    const savedTimeSig = localStorage.getItem('metronome_timeSig');
    const savedSubdiv = localStorage.getItem('metronome_subdiv');
    const savedAccent = localStorage.getItem('metronome_accent');

    if (savedBpm) bpm = parseInt(savedBpm);
    if (savedTimeSig) {
        timeSignature = parseInt(savedTimeSig);
        timeSigSelect.value = timeSignature;
    }
    if (savedSubdiv) {
        subdivision = parseInt(savedSubdiv);
        subdivSelect.value = subdivision;
    }
    if (savedAccent !== null) {
        isAccentEnabled = (savedAccent === 'true');
        accentToggle.checked = isAccentEnabled;
    }
}

function saveSettings() {
    localStorage.setItem('metronome_bpm', Math.round(bpm));
    localStorage.setItem('metronome_timeSig', timeSignature);
    localStorage.setItem('metronome_subdiv', subdivision);
    localStorage.setItem('metronome_accent', isAccentEnabled);
}

// Start
init();
