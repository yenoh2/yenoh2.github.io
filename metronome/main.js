/**
 * Metronome MVP
 * Main Logic
 */

// --- Constants & Global State ---
const MIN_BPM = 20;
const MAX_BPM = 230; // Updated max
const SPOKEN_COUNT_VOICES = {
    'microsoft-zira-desktop-english-united-states': {
        label: 'Zira',
        assetRoot: 'assets/audio/spoken-count/microsoft-zira-desktop-english-united-states'
    }
};
const DEFAULT_SPOKEN_COUNT_VOICE_ID = 'microsoft-zira-desktop-english-united-states';
const SPOKEN_COUNT_AUTO_PACK = 'auto';
const SPOKEN_COUNT_WORDS = ['one', 'two', 'three', 'four'];
const SPOKEN_COUNT_GAIN = 0.75;
const SPOKEN_COUNT_MAX_BPM = 150;
const SPOKEN_COUNT_TARGET_FILL = 0.9;
const SPOKEN_COUNT_MAX_PLAYBACK_RATE = 1.9;
const SPOKEN_COUNT_PACK_PRIORITY = ['natural', 'tight', 'brisk', 'rapid', 'sprint'];
let bpm = 120;
let isPlaying = false;
let timeSignature = 4;
let subdivision = 1;
let isAccentEnabled = false; // Hidden default
let currentBeat = 0;
let nextNoteTime = 0.0;
const scheduleAheadTime = 0.1;
let spokenCountEnabled = false;
let spokenCountPackId = SPOKEN_COUNT_AUTO_PACK;
let spokenCountVoiceId = DEFAULT_SPOKEN_COUNT_VOICE_ID;

// Quick Pick State
let quickPicks = {
    row1: [60, 70, 80, 90, 100, 120],
    row2: [60, 70, 80, 90, 100, 120]
};
let isEditing = { row1: false, row2: false };

// Audio Context
let audioCtx = null;
let spokenCountManifestCache = {};
let spokenCountManifestPromises = {};
let spokenCountPackCache = {};
let spokenCountPackPromises = {};
let isPreparingPlayback = false;

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
const spokenCountToggleBtn = document.getElementById('spokenCountBtn');

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
    updateSpokenCountToggleUI();
    loadSpokenCountManifest().catch(() => {});
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
    // Fire-and-forget: do NOT await — awaiting resume() inside an async
    // handler causes re-entrancy on iOS where the promise resolves late.
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    // iOS Safari requires playing a silent buffer within the user gesture
    // to fully transition the AudioContext to the 'running' state.
    const silentBuf = audioCtx.createBuffer(1, 1, audioCtx.sampleRate);
    const src = audioCtx.createBufferSource();
    src.buffer = silentBuf;
    src.connect(audioCtx.destination);
    src.start(0);
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

function formatPackLabel(packId) {
    return packId.charAt(0).toUpperCase() + packId.slice(1);
}

function getSpokenCountVoiceConfig(voiceId = spokenCountVoiceId) {
    return SPOKEN_COUNT_VOICES[voiceId] || SPOKEN_COUNT_VOICES[DEFAULT_SPOKEN_COUNT_VOICE_ID];
}

function getSpokenCountAssetRoot(voiceId = spokenCountVoiceId) {
    return getSpokenCountVoiceConfig(voiceId).assetRoot;
}

function getSpokenCountManifestPath(voiceId = spokenCountVoiceId) {
    return `${getSpokenCountAssetRoot(voiceId)}/manifest.json`;
}

function getCurrentSpokenCountManifest() {
    return spokenCountManifestCache[spokenCountVoiceId] || null;
}

function setSpokenCountStatus(state, text) {
    // Status element removed; log for debugging only
    console.debug(`[SpokenCount] ${state}: ${text}`);
}

function getManifestPack(packId) {
    return getCurrentSpokenCountManifest()?.packs?.find(pack => pack.id === packId) || null;
}

function getAvailableSpokenCountPackIds() {
    const manifest = getCurrentSpokenCountManifest();
    if (!manifest?.packs) {
        return SPOKEN_COUNT_PACK_PRIORITY.slice();
    }

    return manifest.packs
        .map(pack => pack.id)
        .sort((a, b) => SPOKEN_COUNT_PACK_PRIORITY.indexOf(a) - SPOKEN_COUNT_PACK_PRIORITY.indexOf(b));
}

function getSchedulerSubdivision() {
    return Math.max(subdivision, isSpokenCountActiveForTempo() ? 2 : 1);
}

function restartTransportCycle() {
    currentBeat = 0;

    if (audioCtx) {
        nextNoteTime = audioCtx.currentTime + 0.05;
    }

    resetVisuals();
}

function resolveSpokenCountPackIdForBpm(targetBpm = Math.round(bpm)) {
    if (spokenCountPackId !== SPOKEN_COUNT_AUTO_PACK) {
        return spokenCountPackId;
    }

    const manifest = getCurrentSpokenCountManifest();
    if (!manifest?.packs?.length) {
        return 'tight';
    }

    const eighthNoteMs = 30000 / targetBpm;
    const orderedPacks = getAvailableSpokenCountPackIds()
        .map(getManifestPack)
        .filter(Boolean);

    const fittingPack = orderedPacks.find(pack => {
        const wordDurations = Object.values(pack.words || {}).map(clip => clip.durationMs || 0);
        const longestWord = Math.max(...wordDurations, 0);
        return longestWord <= eighthNoteMs * SPOKEN_COUNT_TARGET_FILL;
    });

    return fittingPack ? fittingPack.id : orderedPacks[orderedPacks.length - 1].id;
}

function isSpokenCountActiveForTempo(targetBpm = Math.round(bpm)) {
    return spokenCountEnabled && targetBpm <= SPOKEN_COUNT_MAX_BPM;
}

function refreshSpokenCountStatus() {
    const manifest = getCurrentSpokenCountManifest();
    if (!manifest) {
        if (spokenCountManifestPromises[spokenCountVoiceId]) {
            setSpokenCountStatus('loading', 'Loading samples...');
        }
        return;
    }

    const resolvedPackId = resolveSpokenCountPackIdForBpm(Math.round(bpm));
    const label = formatPackLabel(resolvedPackId);

    if (!spokenCountEnabled) {
        setSpokenCountStatus('ready', `Ready: ${label}`);
        return;
    }

    if (!isSpokenCountActiveForTempo()) {
        setSpokenCountStatus('ready', `Off above ${SPOKEN_COUNT_MAX_BPM} BPM`);
        return;
    }

    const cacheKey = `${spokenCountVoiceId}:${resolvedPackId}`;
    if (spokenCountPackCache[cacheKey]) {
        const prefix = spokenCountPackId === SPOKEN_COUNT_AUTO_PACK ? 'Auto' : 'Pack';
        setSpokenCountStatus('ready', `${getSpokenCountVoiceConfig().label} ${prefix}: ${label}`);
        return;
    }

    if (spokenCountPackPromises[cacheKey]) {
        setSpokenCountStatus('loading', `Loading ${getSpokenCountVoiceConfig().label} ${label}...`);
        return;
    }

    setSpokenCountStatus('loading', `Need ${getSpokenCountVoiceConfig().label} ${label}`);
}

function updateSpokenCountToggleUI() {
    if (!spokenCountToggleBtn) return;
    if (spokenCountEnabled) {
        spokenCountToggleBtn.classList.remove('off');
    } else {
        spokenCountToggleBtn.classList.add('off');
    }
}

function loadSpokenCountManifest() {
    const cachedManifest = getCurrentSpokenCountManifest();
    if (cachedManifest) {
        return cachedManifest;
    }

    if (!spokenCountManifestPromises[spokenCountVoiceId]) {
        spokenCountManifestPromises[spokenCountVoiceId] = fetch(getSpokenCountManifestPath())
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Manifest request failed: ${response.status}`);
                }
                return response.json();
            })
            .then(manifest => {
                spokenCountManifestCache[spokenCountVoiceId] = manifest;
                updateSpokenCountToggleUI();
                return manifest;
            })
            .catch(error => {
                console.error('Failed to load spoken count manifest', error);
                delete spokenCountManifestCache[spokenCountVoiceId];
                delete spokenCountManifestPromises[spokenCountVoiceId];
                throw error;
            });
    }

    return spokenCountManifestPromises[spokenCountVoiceId];
}

async function loadAudioBuffer(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Audio request failed for ${path}: ${response.status}`);
    }

    const audioData = await response.arrayBuffer();
    return await audioCtx.decodeAudioData(audioData);
}

async function ensureSpokenCountPackLoaded(packId) {
    if (!audioCtx) {
        return null;
    }

    await loadSpokenCountManifest();

    const resolvedPackId = packId === SPOKEN_COUNT_AUTO_PACK
        ? resolveSpokenCountPackIdForBpm(Math.round(bpm))
        : packId;
    const cacheKey = `${spokenCountVoiceId}:${resolvedPackId}`;

    if (spokenCountPackCache[cacheKey]) {
        return spokenCountPackCache[cacheKey];
    }

    if (!spokenCountPackPromises[cacheKey]) {
        const manifestPack = getManifestPack(resolvedPackId);
        if (!manifestPack) {
            throw new Error(`Spoken count pack '${resolvedPackId}' was not found in the manifest.`);
        }

        refreshSpokenCountStatus();

        spokenCountPackPromises[cacheKey] = Promise.all(
            Object.entries(manifestPack.words).map(async ([wordId, clip]) => {
                const buffer = await loadAudioBuffer(`${getSpokenCountAssetRoot()}/${clip.file}`);
                return [wordId, {
                    buffer,
                    durationMs: clip.durationMs,
                    startOffsetMs: clip.startOffsetMs || 0
                }];
            })
        ).then(entries => {
            const pack = {
                id: resolvedPackId,
                words: Object.fromEntries(entries)
            };
            spokenCountPackCache[cacheKey] = pack;
            return pack;
        }).catch(error => {
            console.error(`Failed to load spoken count pack '${resolvedPackId}'`, error);
            setSpokenCountStatus('error', `Load failed: ${formatPackLabel(resolvedPackId)}`);
            throw error;
        }).finally(() => {
            delete spokenCountPackPromises[cacheKey];
            refreshSpokenCountStatus();
        });
    }

    return spokenCountPackPromises[cacheKey];
}

async function warmSpokenCountPackForCurrentTempo() {
    if (!isSpokenCountActiveForTempo() || !audioCtx) {
        refreshSpokenCountStatus();
        return;
    }

    try {
        await ensureSpokenCountPackLoaded(resolveSpokenCountPackIdForBpm(Math.round(bpm)));
    } catch (error) {
        console.error('Unable to warm spoken count pack for current tempo', error);
    }
}

function shouldTriggerSubdivision(stepIndex, schedulerSubdivision, targetSubdivision) {
    const interval = schedulerSubdivision / targetSubdivision;
    if (!Number.isInteger(interval) || interval < 1) {
        return false;
    }

    return (stepIndex % schedulerSubdivision) % interval === 0;
}

function playBufferedSound(time, buffer, gainValue, playbackRate = 1, startOffsetSeconds = 0) {
    if (!buffer) {
        return;
    }

    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = playbackRate;
    const safeStartOffset = Math.min(
        Math.max(0, startOffsetSeconds),
        Math.max(0, buffer.duration - 0.001)
    );

    const gainNode = audioCtx.createGain();
    gainNode.gain.value = gainValue;

    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    source.start(time, safeStartOffset);
}

function getLoadedSpokenCountPack(targetBpm = Math.round(bpm)) {
    const desiredPackId = resolveSpokenCountPackIdForBpm(targetBpm);
    const desiredCacheKey = `${spokenCountVoiceId}:${desiredPackId}`;
    if (spokenCountPackCache[desiredCacheKey]) {
        return spokenCountPackCache[desiredCacheKey];
    }

    const packIds = getAvailableSpokenCountPackIds();
    const desiredIndex = Math.max(0, packIds.indexOf(desiredPackId));

    for (let distance = 1; distance < packIds.length; distance++) {
        const lowerId = packIds[desiredIndex - distance];
        const lowerKey = `${spokenCountVoiceId}:${lowerId}`;
        if (lowerId && spokenCountPackCache[lowerKey]) {
            return spokenCountPackCache[lowerKey];
        }

        const higherId = packIds[desiredIndex + distance];
        const higherKey = `${spokenCountVoiceId}:${higherId}`;
        if (higherId && spokenCountPackCache[higherKey]) {
            return spokenCountPackCache[higherKey];
        }
    }

    return null;
}

function scheduleSpokenCount(time, stepIndex, schedulerSubdivision) {
    if (!isSpokenCountActiveForTempo() || !audioCtx || !getCurrentSpokenCountManifest()) {
        return;
    }

    if (!shouldTriggerSubdivision(stepIndex, schedulerSubdivision, 2)) {
        return;
    }

    const pack = getLoadedSpokenCountPack(Math.round(bpm));
    if (!pack) {
        return;
    }

    const stepInBeat = stepIndex % schedulerSubdivision;
    const majorBeat = Math.floor(stepIndex / schedulerSubdivision);
    const wordId = stepInBeat === 0 ? SPOKEN_COUNT_WORDS[majorBeat] : 'and';
    const clip = pack.words[wordId];

    if (!clip) {
        return;
    }

    const eighthNoteMs = 30000 / bpm;
    const targetDurationMs = eighthNoteMs * SPOKEN_COUNT_TARGET_FILL;
    const playbackRate = Math.min(
        SPOKEN_COUNT_MAX_PLAYBACK_RATE,
        Math.max(1, clip.durationMs / targetDurationMs)
    );

    playBufferedSound(
        time,
        clip.buffer,
        SPOKEN_COUNT_GAIN,
        playbackRate,
        (clip.startOffsetMs || 0) / 1000
    );
}

function scheduleStep(time, stepIndex, schedulerSubdivision) {
    const stepInBeat = stepIndex % schedulerSubdivision;
    const majorBeat = Math.floor(stepIndex / schedulerSubdivision);

    if (shouldTriggerSubdivision(stepIndex, schedulerSubdivision, subdivision)) {
        const isAccent = isAccentEnabled && stepInBeat === 0 && majorBeat === 0;
        const bufferToPlay = isAccent ? woodblockHighBuffer : woodblockLowBuffer;
        playBufferedSound(time, bufferToPlay, 0.5);

        if (stepInBeat === 0) {
            const drawTime = (time - audioCtx.currentTime) * 1000;
            setTimeout(() => {
                updateBeatVisuals(majorBeat);
            }, Math.max(0, drawTime));
        }
    }

    scheduleSpokenCount(time, stepIndex, schedulerSubdivision);
}
function nextNote(schedulerSubdivision) {
    const secondsPerBeat = 60.0 / bpm;
    const interval = secondsPerBeat / schedulerSubdivision;
    nextNoteTime += interval;

    currentBeat++;
    if (currentBeat >= timeSignature * schedulerSubdivision) {
        currentBeat = 0;
    }
}

function scheduler() {
    const schedulerSubdivision = getSchedulerSubdivision();

    while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
        scheduleStep(nextNoteTime, currentBeat, schedulerSubdivision);
        nextNote(schedulerSubdivision);
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

// Handle visibility change — re-unlock AudioContext on iOS when returning to foreground
document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'hidden') {
        await releaseWakeLock();
    } else if (document.visibilityState === 'visible' && isPlaying && audioCtx) {
        // iOS suspends AudioContext when backgrounded; re-resume it
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        requestWakeLock();
    }
});

async function togglePlay() {
    // Synchronous unlock — must happen inside the user gesture, never awaited
    unlockAudioContext();

    // --- STOP path: always immediate, no async work ---
    if (isPlaying) {
        isPlaying = false;
        playButton.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="80" height="80"><path d="M8 5v14l11-7z"/></svg>`;
        playButton.classList.remove('playing');
        releaseWakeLock();
        resetVisuals();
        return;
    }

    // --- START path: guard against re-entrancy BEFORE any await ---
    if (isPreparingPlayback) {
        return;
    }
    isPreparingPlayback = true;

    try {
        // Wait for AudioContext to reach 'running' state (iOS may take a moment)
        if (audioCtx.state !== 'running') {
            await new Promise(resolve => {
                const onRunning = () => {
                    if (audioCtx.state === 'running') {
                        audioCtx.removeEventListener('statechange', onRunning);
                        resolve();
                    }
                };
                audioCtx.addEventListener('statechange', onRunning);
                // Safety timeout so we never hang indefinitely
                setTimeout(() => {
                    audioCtx.removeEventListener('statechange', onRunning);
                    resolve();
                }, 500);
            });
        }

        // Wait for woodblock buffers to be ready (critical on first play)
        if (!woodblockHighBuffer || !woodblockLowBuffer) {
            const timeout = new Promise(resolve => setTimeout(resolve, 500));
            await Promise.race([
                Promise.all([
                    woodblockHighBuffer || renderOfflineWoodblock(1200).then(b => { woodblockHighBuffer = b; }),
                    woodblockLowBuffer  || renderOfflineWoodblock(800).then(b => { woodblockLowBuffer = b; })
                ]),
                timeout
            ]);
        }

        if (spokenCountEnabled) {
            try {
                await warmSpokenCountPackForCurrentTempo();
            } catch (error) {
                console.error('Failed to prepare spoken count before playback', error);
            }
        }

        isPlaying = true;
        restartTransportCycle();
        playButton.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="80" height="80"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
        playButton.classList.add('playing');
        requestWakeLock();
        scheduler();
    } finally {
        isPreparingPlayback = false;
    }
}

// --- UI Logic ---

function updateUI() {
    bpmValueEl.textContent = Math.round(bpm);
    updateTempoMarking();
    updateDialPosition();
    updateBeatIndicators();
    updateQuickPickActive();
    refreshSpokenCountStatus();

    if (spokenCountEnabled && audioCtx) {
        warmSpokenCountPackForCurrentTempo();
    }
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

function updateBeatVisuals(majorBeat) {
    // Reset all
    document.querySelectorAll('.beat-dot').forEach(d => d.classList.remove('active'));

    const dot = document.getElementById(`beat-${majorBeat}`);
    if (dot) dot.classList.add('active');
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
const mainControls = document.querySelector('.main-controls');

function spawnRipple(x, y) {
    const rect = mainControls.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 0.6;
    const ripple = document.createElement('span');
    ripple.className = 'play-zone-ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (x - rect.left - size / 2) + 'px';
    ripple.style.top = (y - rect.top - size / 2) + 'px';
    mainControls.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
}

function triggerPlayZoneTap(x, y) {
    spawnRipple(x, y);
    // Tactile press animation on the button
    playButton.classList.add('pressed');
    setTimeout(() => playButton.classList.remove('pressed'), 150);
    togglePlay();
}

function setupEventListeners() {
    // Wire the whole play zone, not just the small button
    mainControls.addEventListener('click', (e) => {
        triggerPlayZoneTap(e.clientX, e.clientY);
    });

    mainControls.addEventListener('touchstart', (e) => {
        // Prevent ghost click from also firing
        e.preventDefault();
        const t = e.touches[0];
        triggerPlayZoneTap(t.clientX, t.clientY);
    }, { passive: false });

    timeSigSelect.addEventListener('change', (e) => {
        timeSignature = parseInt(e.target.value);
        restartTransportCycle();
        updateUI();
        saveSettings();
    });

    // Hidden input listeners for robust state
    subdivSelect.addEventListener('change', (e) => {
        subdivision = parseInt(e.target.value);
        restartTransportCycle();
        updateUI();
        saveSettings();
    });

    accentToggle.addEventListener('change', (e) => {
        isAccentEnabled = e.target.checked;
        updateBeatIndicators();
        saveSettings();
    });

    spokenCountToggleBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        spokenCountEnabled = !spokenCountEnabled;
        updateSpokenCountToggleUI();
        saveSettings();

        if (spokenCountEnabled) {
            try {
                await warmSpokenCountPackForCurrentTempo();
            } catch (error) {
                console.error('Failed to enable spoken count', error);
            }
        }

        if (isPlaying) {
            restartTransportCycle();
        }
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
    const savedSpokenCountEnabled = localStorage.getItem('metronome_spokenCountEnabled');
    const savedSpokenCountVoice = localStorage.getItem('metronome_spokenCountVoice');
    const savedSpokenCountPack = localStorage.getItem('metronome_spokenCountPack');

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

    if (savedSpokenCountEnabled !== null) {
        spokenCountEnabled = (savedSpokenCountEnabled === 'true');
    }

    if (savedSpokenCountVoice && SPOKEN_COUNT_VOICES[savedSpokenCountVoice]) {
        spokenCountVoiceId = savedSpokenCountVoice;
    }

    if (savedSpokenCountPack) {
        spokenCountPackId = savedSpokenCountPack;
    }
}

function saveSettings() {
    localStorage.setItem('metronome_bpm', Math.round(bpm));
    localStorage.setItem('metronome_timeSig', timeSignature);
    localStorage.setItem('metronome_subdiv', subdivision);
    localStorage.setItem('metronome_accent', isAccentEnabled);
    localStorage.setItem('metronome_quickPicks', JSON.stringify(quickPicks));
    localStorage.setItem('metronome_spokenCountEnabled', spokenCountEnabled);
    localStorage.setItem('metronome_spokenCountVoice', spokenCountVoiceId);
    localStorage.setItem('metronome_spokenCountPack', spokenCountPackId);
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
