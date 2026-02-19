/**
 * Metronome MVP
 * Main Logic
 */

// --- Constants & Global State ---
const MIN_BPM = 20;
const MAX_BPM = 230; // Updated max
let bpm = 120;
let isPlaying = false;
let timeSignature = 4;
let subdivision = 1;
let isAccentEnabled = false; // Hidden default
let currentBeat = 0;
let nextNoteTime = 0.0;
const scheduleAheadTime = 0.1;

// Quick Pick State
let quickPicks = {
    row1: [60, 70, 80, 90, 100, 120],
    row2: [60, 70, 80, 90, 100, 120]
};
let isEditing = { row1: false, row2: false };

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
const bpmMinusBtn = document.getElementById('bpmMinus');
const bpmPlusBtn = document.getElementById('bpmPlus');
const row1El = document.getElementById('quickPickRow1');
const row2El = document.getElementById('quickPickRow2');
const editRow1Btn = document.getElementById('editRow1');
const editRow2Btn = document.getElementById('editRow2');
const numberPadOverlay = document.getElementById('numberPadOverlay');
const numpadDisplay = document.getElementById('numpadDisplay');

// Number Pad State
let numpadValue = '';
let numpadCallback = null;
let numpadIsFirstInput = false;

// --- Initialization ---

function init() {
    loadSettings();
    updateUI();
    renderQuickPicks();
    setupEventListeners();
    setupDial();
}

// --- Audio Engine ---

let woodblockHighBuffer = null;
let woodblockLowBuffer = null;

function unlockAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        // Start rendering buffers immediately
        renderOfflineWoodblock(1200).then(buffer => {
            woodblockHighBuffer = buffer;
        });
        renderOfflineWoodblock(800).then(buffer => {
            woodblockLowBuffer = buffer;
        });
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

// Render sound using OfflineAudioContext (The "Baking" process)
async function renderOfflineWoodblock(baseFreq) {
    const duration = 0.1;
    const sampleRate = 44100; // Standard CD quality
    const offlineCtx = new OfflineAudioContext(1, sampleRate * duration, sampleRate);

    const osc = offlineCtx.createOscillator();
    const gainNode = offlineCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(offlineCtx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, 0);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.8, 0.02);

    gainNode.gain.setValueAtTime(0, 0);
    gainNode.gain.linearRampToValueAtTime(1.0, 0.001); // High gain for offline render
    gainNode.gain.exponentialRampToValueAtTime(0.001, 0.1);

    osc.start(0);
    osc.stop(0.1);

    return await offlineCtx.startRendering();
}


// Play the pre-rendered buffer
function playClick(time, beatNumber) {
    const isAccent = isAccentEnabled && (beatNumber % timeSignature === 0);
    const bufferToPlay = isAccent ? woodblockHighBuffer : woodblockLowBuffer;

    // Only play if buffer is ready (unlocked and rendered)
    if (bufferToPlay) {
        const source = audioCtx.createBufferSource();
        source.buffer = bufferToPlay;

        // Global Volume for the click to prevent clipping
        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.5; // Reduced from 0.7 to 0.5 for headroom

        source.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        source.start(time);
    }

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

// Dial state for indeterminate (relative) rotation
let dialAngle = 0;   // Current visual angle of the knob (degrees)
let lastAngle = null; // Previous pointer angle during drag
const DEGREES_PER_BPM = 3; // Sensitivity: 3° of rotation = 1 BPM change

function updateDialPosition() {
    // Position the knob based on the current dialAngle
    const radians = (dialAngle * Math.PI) / 180;
    const dialRadius = 80;
    const kX = dialRadius * Math.cos(radians);
    const kY = dialRadius * Math.sin(radians);

    dialKnob.style.left = `calc(50% + ${kX}px)`;
    dialKnob.style.top = `calc(50% + ${kY}px)`;
}

// --- Dial Interaction ---
let isDragging = false;

function getPointerAngle(clientX, clientY) {
    const rect = tempoDial.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    return Math.atan2(dy, dx) * (180 / Math.PI); // -180 to 180
}

function onDialMove(clientX, clientY) {
    const angle = getPointerAngle(clientX, clientY);

    if (lastAngle !== null) {
        // Calculate angular delta, handling wrap-around (-180/180 boundary)
        let delta = angle - lastAngle;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;

        // Apply delta to BPM at the configured sensitivity
        const bpmDelta = delta / DEGREES_PER_BPM;
        bpm = Math.max(MIN_BPM, Math.min(MAX_BPM, bpm + bpmDelta));

        // Update the visual knob angle (free-spinning, no clamp)
        dialAngle += delta;

        updateUI();
        saveSettings();
    }

    lastAngle = angle;
}

function setupDial() {
    tempoDial.addEventListener('mousedown', (e) => {
        isDragging = true;
        lastAngle = getPointerAngle(e.clientX, e.clientY);
    });

    tempoDial.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        lastAngle = getPointerAngle(touch.clientX, touch.clientY);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) onDialMove(e.clientX, e.clientY);
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            onDialMove(touch.clientX, touch.clientY);
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        lastAngle = null;
    });
    document.addEventListener('touchend', () => {
        isDragging = false;
        lastAngle = null;
    });
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

    // Hidden input listeners for robust state
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

    // Fine Tune
    bpmMinusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        bpm = Math.max(MIN_BPM, Math.round(bpm) - 1);
        updateUI();
        saveSettings();
    });

    bpmPlusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        bpm = Math.min(MAX_BPM, Math.round(bpm) + 1);
        updateUI();
        saveSettings();
    });

    // Edit Buttons
    editRow1Btn.addEventListener('click', () => toggleEditMode('row1'));
    editRow2Btn.addEventListener('click', () => toggleEditMode('row2'));
}

// --- Quick Pick Tempos ---

function renderQuickPicks() {
    // Clear existing buttons (keeping edit btn)
    const renderRow = (rowId, data, rowKey) => {
        const container = document.getElementById(rowId);
        // Remove old buttons, keep first child (edit btn)
        while (container.children.length > 1) {
            container.removeChild(container.lastChild);
        }

        data.forEach((val, index) => {
            const btn = document.createElement('button');
            btn.className = 'tempo-btn';
            btn.textContent = val;
            btn.dataset.bpm = val;
            btn.dataset.index = index;
            btn.dataset.row = rowKey;

            btn.addEventListener('click', () => handleQuickPickClick(rowKey, index, val));

            if (isEditing[rowKey]) {
                btn.classList.add('editing-pulse');
            }

            container.appendChild(btn);
        });
    };

    renderRow('quickPickRow1', quickPicks.row1, 'row1');
    renderRow('quickPickRow2', quickPicks.row2, 'row2');
    updateQuickPickActive();
}


function handleQuickPickClick(rowKey, index, val) {
    if (isEditing[rowKey]) {
        // Edit Mode: Show number pad
        showNumberPad(val, (newVal) => {
            if (newVal !== null) {
                const parsed = parseInt(newVal);
                if (!isNaN(parsed) && parsed >= MIN_BPM && parsed <= MAX_BPM) {
                    quickPicks[rowKey][index] = parsed;
                    renderQuickPicks();
                    saveSettings();
                }
            }
        });
    } else {
        // Normal Mode: Set BPM
        bpm = val;
        updateUI();
        updateQuickPickActive();
        saveSettings();
    }
}

function toggleEditMode(rowKey) {
    isEditing[rowKey] = !isEditing[rowKey];

    // Visual feedback for edit button
    const btnId = rowKey === 'row1' ? 'editRow1' : 'editRow2';
    const btn = document.getElementById(btnId);
    if (isEditing[rowKey]) {
        btn.classList.add('editing');
        btn.textContent = '✓'; // Checkmark
    } else {
        btn.classList.remove('editing');
        btn.textContent = '✎'; // Pencil
    }

    renderQuickPicks();
}

function updateQuickPickActive() {
    const currentBpm = Math.round(bpm);
    const buttons = document.querySelectorAll('.tempo-btn');

    buttons.forEach(btn => {
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
    const savedQuickPicks = localStorage.getItem('metronome_quickPicks');

    if (savedBpm) bpm = parseInt(savedBpm);

    // Focus Mode Defaults: Force 4/4 if not set, but respect saved
    if (savedTimeSig) {
        timeSignature = parseInt(savedTimeSig);
        timeSigSelect.value = timeSignature;
    }

    // Force Defaults for Focus Mode if user hasn't explicitly set them?
    // User requested "Hide", typically implies revert to default simple behavior.
    if (savedSubdiv) {
        subdivision = parseInt(savedSubdiv);
        subdivSelect.value = subdivision;
    }
    if (savedAccent !== null) {
        isAccentEnabled = (savedAccent === 'true');
        accentToggle.checked = isAccentEnabled;
    }

    if (savedQuickPicks) {
        try {
            quickPicks = JSON.parse(savedQuickPicks);
        } catch (e) {
            console.error("Failed to parse quick picks", e);
        }
    }
}

function saveSettings() {
    localStorage.setItem('metronome_bpm', Math.round(bpm));
    localStorage.setItem('metronome_timeSig', timeSignature);
    localStorage.setItem('metronome_subdiv', subdivision);
    localStorage.setItem('metronome_accent', isAccentEnabled);
    localStorage.setItem('metronome_quickPicks', JSON.stringify(quickPicks));
}

// --- Number Pad Functions ---

function showNumberPad(currentValue, callback) {
    numpadValue = String(currentValue);
    numpadCallback = callback;
    numpadIsFirstInput = true;
    numpadDisplay.textContent = numpadValue;
    numberPadOverlay.style.display = 'flex';
}

function hideNumberPad() {
    numberPadOverlay.style.display = 'none';
    numpadValue = '';
    numpadCallback = null;
}

function handleNumpadInput(input) {
    if (input === 'backspace') {
        if (numpadIsFirstInput) {
            numpadValue = '0';
            numpadIsFirstInput = false;
        } else {
            numpadValue = numpadValue.slice(0, -1);
            if (numpadValue === '') numpadValue = '0';
        }
    } else if (input === 'submit') {
        if (numpadCallback) {
            numpadCallback(numpadValue);
        }
        hideNumberPad();
    } else {
        // Number input
        if (numpadIsFirstInput || numpadValue === '0') {
            numpadValue = input;
            numpadIsFirstInput = false;
        } else {
            numpadValue += input;
        }
        // Cap at 3 digits (max BPM is 230)
        if (numpadValue.length > 3) {
            numpadValue = numpadValue.slice(0, 3);
        }
    }
    numpadDisplay.textContent = numpadValue;
}

// Setup Number Pad Event Listeners
document.querySelectorAll('.numpad-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const num = btn.dataset.num;
        const action = btn.dataset.action;

        if (num) {
            handleNumpadInput(num);
        } else if (action) {
            handleNumpadInput(action);
        }
    });
});

// Start
init();
