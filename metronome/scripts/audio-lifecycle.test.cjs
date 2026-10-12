// Dependency-free regression checks for the actual transport code.
// Browser audio and time are controlled here; physical iOS routing needs device testing.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'main.js'), 'utf8')
    .replace(/\binit\(\);\s*$/, '');
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'assets', 'audio',
    'spoken-count', 'microsoft-zira-desktop-english-united-states', 'manifest.json'), 'utf8').replace(/^\uFEFF/, ''));

function deferred() {
    let resolve, reject;
    const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
    return { promise, resolve, reject };
}

async function flush() {
    for (let i = 0; i < 24; i++) await Promise.resolve();
}

function fixture(options = {}) {
    const timers = new Map(), elements = new Map(), contexts = [], events = [];
    const documentListeners = new Map();
    let timerId = 0, now = 0;
    function element(id) {
        if (!elements.has(id)) {
            const classes = new Set();
            elements.set(id, {
                id, textContent: '', hidden: true, innerHTML: '', value: '', style: {}, dataset: {},
                attributes: {}, children: [], listeners: {},
                classList: { add: value => classes.add(value), remove: value => classes.delete(value),
                    toggle(value, on) { if (on) classes.add(value); else classes.delete(value); } },
                setAttribute(name, value) { this.attributes[name] = value; },
                addEventListener(name, callback) { this.listeners[name] = callback; },
                appendChild(child) { this.children.push(child); },
                removeChild(child) { this.children.splice(this.children.indexOf(child), 1); },
                get lastChild() { return this.children.at(-1); },
                getBoundingClientRect() { return { left: 0, top: 0, width: 210, height: 210 }; }
            });
        }
        return elements.get(id);
    }
    const parameter = () => ({ value: 1, setValueAtTime() {}, exponentialRampToValueAtTime() {},
        linearRampToValueAtTime() {} });
    class AudioContext {
        constructor() {
            this.state = options.initialState || 'suspended';
            this.currentTime = 0;
            this.sampleRate = 44100;
            this.destination = {};
            this.listeners = new Set();
            this.sources = [];
            this.resumeCalls = 0;
            contexts.push(this);
        }
        setState(state) {
            this.state = state;
            for (const callback of Array.from(this.listeners)) callback();
        }
        resume() {
            this.resumeCalls++;
            if (options.resume) return options.resume(this);
            this.setState('running');
            return Promise.resolve();
        }
        close() { this.setState('closed'); return Promise.resolve(); }
        addEventListener(name, callback) { if (name === 'statechange') this.listeners.add(callback); }
        removeEventListener(name, callback) { this.listeners.delete(callback); }
        createBuffer(channels, length, rate) { return { duration: length / rate, kind: 'silent' }; }
        createBufferSource() {
            const source = { playbackRate: { value: 1 }, onended: null, started: false, stopped: false,
                connect() {}, disconnect() {},
                start(time, offset) { this.started = true; this.time = time; this.offset = offset; },
                stop() { this.stopped = true; if (this.onended) this.onended(); }
            };
            this.sources.push(source);
            return source;
        }
        createGain() { return { gain: parameter(), connect() {}, disconnect() {} }; }
        decodeAudioData() { return Promise.resolve({ duration: 0.15, kind: 'voice' }); }
    }
    class OfflineAudioContext extends AudioContext {
        constructor() { super(); contexts.pop(); }
        createOscillator() { return { frequency: parameter(), connect() {}, start() {}, stop() {} }; }
        startRendering() {
            return options.render ? options.render() : Promise.resolve({ duration: 0.1, kind: 'click' });
        }
    }
    const document = {
        visibilityState: 'visible', getElementById: element,
        querySelector: () => element('play-zone'), querySelectorAll: () => [],
        addEventListener(name, callback) { documentListeners.set(name, callback); },
        createElement: () => element(`created-${elements.size}`)
    };
    const navigator = { ...(options.navigator || {}) };
    const context = vm.createContext({
        document, navigator, window: { AudioContext }, OfflineAudioContext,
        AbortController, DOMException,
        localStorage: { getItem: () => null, setItem() {} },
        fetch: async url => {
            if (options.fetch) return options.fetch(url);
            return { ok: true, json: async () => manifest, arrayBuffer: async () => new ArrayBuffer(1) };
        },
        setTimeout(callback, delay = 0) {
            const id = ++timerId;
            timers.set(id, { callback, due: now + delay, delay });
            return id;
        },
        clearTimeout: id => timers.delete(id),
        console: { debug() {}, log() {}, warn: (...args) => events.push(args), error: (...args) => events.push(args) }
    });
    vm.runInContext(source, context);
    const run = code => vm.runInContext(code, context);
    function tick(ms) {
        const target = now + ms;
        let iterations = 0;
        while (true) {
            const next = [...timers].filter(([, timer]) => timer.due <= target)
                .sort((a, b) => a[1].due - b[1].due)[0];
            if (!next) break;
            if (++iterations > 10000) throw new Error('Timer loop did not finish');
            for (const audio of contexts) if (audio.state === 'running') audio.currentTime += (next[1].due - now) / 1000;
            now = next[1].due;
            timers.delete(next[0]);
            next[1].callback();
        }
        for (const audio of contexts) if (audio.state === 'running') audio.currentTime += (target - now) / 1000;
        now = target;
    }
    const audibleSources = () => contexts.flatMap(audio => audio.sources)
        .filter(sound => sound.buffer?.kind !== 'silent' && sound.started);
    return { run, tick, timers, contexts, element, navigator, events, document, audibleSources,
        visibility(state) { document.visibilityState = state; documentListeners.get('visibilitychange')(); } };
}

test('start verifies running audio and ready click buffers before showing playback', async () => {
    const f = fixture();
    const started = f.run('togglePlay()');
    assert.equal(f.run('isPreparingPlayback'), true);
    assert.equal(f.run('isPlaying'), false);
    await started;
    assert.equal(f.run('isPlaying'), true);
    assert.equal(f.element('playButton').attributes['aria-label'], 'Stop Metronome');
    assert.equal(f.audibleSources().length, 1);
});

test('a context that never runs times out honestly and can retry', async () => {
    let allowResume = false;
    const f = fixture({ resume: audio => {
        if (allowResume) audio.setState('running');
        return Promise.resolve();
    } });
    const attempt = f.run('togglePlay()');
    await flush();
    f.tick(2000);
    await attempt;
    assert.equal(f.run('isPlaying || isPreparingPlayback'), false);
    assert.match(f.element('playbackStatus').textContent, /Tap to try again/);
    assert.equal(f.audibleSources().length, 0);
    assert.equal(f.contexts[0].listeners.size, 1, 'temporary startup listener removed');
    allowResume = true;
    await f.run('togglePlay()');
    assert.equal(f.run('isPlaying'), true);
    assert.equal(f.contexts.length, 2, 'a retry replaces the context that could not run');
});

test('a rejected resume is handled without entering playback', async () => {
    const f = fixture({ resume: () => Promise.reject(new Error('Not allowed')) });
    await f.run('togglePlay()');
    assert.equal(f.run('isPlaying || isPreparingPlayback'), false);
    assert.equal(f.audibleSources().length, 0);
});

test('touch release retries gesture unlock without toggling playback twice', async () => {
    const f = fixture({ resume: audio => {
        if (audio.resumeCalls > 1) audio.setState('running');
        return Promise.resolve();
    } });
    f.run('setupEventListeners()');
    const starting = f.run('togglePlay()');
    f.element('play-zone').listeners.touchend({ preventDefault() {} });
    await starting;
    assert.equal(f.contexts[0].resumeCalls, 2);
    assert.equal(f.run('isPlaying'), true);
    f.element('play-zone').listeners.touchend({ preventDefault() {} });
    assert.equal(f.run('isPlaying'), true);
});

test('failed click rendering cannot produce a silent playing state', async () => {
    let fail = true;
    const f = fixture({ render: () => fail ? Promise.reject(new Error('Render failed'))
        : Promise.resolve({ duration: 0.1, kind: 'click' }) });
    await f.run('togglePlay()');
    assert.equal(f.run('isPlaying'), false);
    assert.equal(f.audibleSources().length, 0);
    fail = false;
    await f.run('togglePlay()');
    assert.equal(f.run('isPlaying'), true, 'a second tap retries buffer rendering');
});

test('tap during preparation cancels it, including a late successful resume', async () => {
    const pending = deferred();
    const f = fixture({ resume: () => pending.promise });
    const attempt = f.run('togglePlay()');
    await f.run('togglePlay()');
    f.contexts[0].setState('running');
    pending.resolve();
    await attempt;
    assert.equal(f.run('isPlaying || isPreparingPlayback || playbackRequested'), false);
    assert.equal(f.audibleSources().length, 0);
});

test('an old cancelled start cannot clear a newer preparation', async () => {
    const renders = [deferred(), deferred()];
    let render = 0;
    const f = fixture({ render: () => renders[render++].promise });
    const first = f.run('togglePlay()');
    await f.run('togglePlay()');
    const second = f.run('togglePlay()');
    await first;
    assert.equal(f.run('isPreparingPlayback'), true);
    for (const result of renders) result.resolve({ duration: 0.1, kind: 'click' });
    await second;
    assert.equal(f.run('isPlaying'), true);
});

test('Stop cancels audio sources, visual timers and stale scheduler callbacks', async () => {
    const f = fixture();
    await f.run('togglePlay()');
    const staleCallback = [...f.timers.values()].find(timer => timer.delay === 25).callback;
    await f.run('togglePlay()');
    assert.ok(f.audibleSources().every(sound => sound.stopped));
    assert.equal(f.run('scheduledSounds.size + visualTimers.size'), 0);
    const count = f.audibleSources().length;
    staleCallback();
    f.tick(1000);
    assert.equal(f.audibleSources().length, count);
    assert.equal(f.element('playButton').attributes['aria-label'], 'Start Metronome');
});

test('rapid Start-Stop-Start leaves one scheduler', async () => {
    const f = fixture();
    await f.run('togglePlay()');
    const stale = [...f.timers.values()].find(timer => timer.delay === 25).callback;
    await f.run('togglePlay()');
    await f.run('togglePlay()');
    stale();
    assert.equal([...f.timers.values()].filter(timer => timer.delay === 25).length, 1);
});

test('late scheduler resets to a future downbeat instead of replaying missed notes', async () => {
    const f = fixture();
    await f.run('togglePlay()');
    const previous = f.audibleSources().length;
    f.run('audioCtx.currentTime = 10; scheduler()');
    const newSounds = f.audibleSources().slice(previous);
    assert.equal(newSounds.length, 1);
    assert.ok(newSounds[0].time > 10);
    assert.equal(f.run('currentBeat'), 1);
});

test('interrupted audio pauses honestly and resumes with a new timing cycle', async () => {
    const f = fixture();
    await f.run('togglePlay()');
    const audio = f.contexts[0];
    audio.setState('interrupted');
    assert.equal(f.run('isPlaying'), false);
    assert.ok(f.audibleSources().every(sound => sound.stopped));
    assert.match(f.element('playbackStatus').textContent, /Tap to resume/);
    audio.currentTime = 10;
    audio.setState('running');
    await flush();
    assert.equal(f.run('isPlaying'), true);
    assert.ok(f.audibleSources().at(-1).time > 10);
});

test('a tap attempts to resume an interrupted context', async () => {
    const f = fixture({ initialState: 'interrupted' });
    await f.run('togglePlay()');
    assert.equal(f.contexts[0].resumeCalls, 1);
    assert.equal(f.run('isPlaying'), true);
});

test('a closed context is recreated on the next tap', async () => {
    const f = fixture();
    await f.run('togglePlay()');
    f.contexts[0].setState('closed');
    await f.run('togglePlay()');
    assert.equal(f.contexts.length, 2);
    assert.equal(f.run('isPlaying'), true);
});

test('hiding the app stops queued sounds and returning starts a fresh cycle', async () => {
    const f = fixture();
    await f.run('togglePlay()');
    f.visibility('hidden');
    assert.equal(f.run('isPlaying'), false);
    assert.ok(f.audibleSources().every(sound => sound.stopped));
    f.contexts[0].currentTime = 30;
    f.visibility('visible');
    await flush();
    assert.equal(f.run('isPlaying'), true);
    assert.ok(f.audibleSources().at(-1).time > 30);
});

test('hidden preparation cannot complete into background playback', async () => {
    const pending = deferred();
    const f = fixture({ render: () => pending.promise });
    const starting = f.run('togglePlay()');
    f.visibility('hidden');
    pending.resolve({ duration: 0.1, kind: 'click' });
    await starting;
    assert.equal(f.run('isPlaying'), false);
    assert.equal(f.audibleSources().length, 0);
});

test('stalled voice loading has a deadline and leaves the clicks usable', async () => {
    const f = fixture({ fetch: () => new Promise(() => {}) });
    f.run('spokenCountEnabled = true');
    const starting = f.run('togglePlay()');
    await flush();
    f.tick(1500);
    await starting;
    assert.equal(f.run('isPlaying'), true);
    assert.match(f.element('playbackStatus').textContent, /Clicks still work/);
    assert.equal(f.audibleSources().length, 1);
});

test('voice recovery clears the warning after a late load succeeds', async () => {
    const pending = deferred();
    const f = fixture({ fetch: () => pending.promise });
    f.run('spokenCountEnabled = true');
    const starting = f.run('togglePlay()');
    await flush();
    f.tick(1500);
    await starting;
    assert.match(f.element('playbackStatus').textContent, /Clicks still work/);
    pending.resolve({ ok: true, json: async () => manifest, arrayBuffer: async () => new ArrayBuffer(1) });
    await flush();
    assert.equal(f.element('playbackStatus').hidden, true);
    assert.equal(f.run('isPlaying'), true);
});

test('voice preparation can be cancelled while its resources continue loading', async () => {
    const pending = deferred();
    const f = fixture({ fetch: () => pending.promise });
    f.run('spokenCountEnabled = true');
    const starting = f.run('togglePlay()');
    await flush();
    await f.run('togglePlay()');
    pending.resolve({ ok: true, json: async () => manifest, arrayBuffer: async () => new ArrayBuffer(1) });
    await starting;
    await flush();
    assert.equal(f.run('isPlaying || isPreparingPlayback'), false);
    assert.equal(f.audibleSources().length, 0);
});

test('working voice samples still schedule the existing eighth-note count', async () => {
    const f = fixture();
    f.run('spokenCountEnabled = true; bpm = 120');
    await f.run('togglePlay()');
    assert.equal(f.run('getSchedulerSubdivision()'), 2);
    assert.ok(f.audibleSources().some(sound => sound.buffer.kind === 'voice'));
    await f.run('togglePlay()');
    assert.ok(f.audibleSources().every(sound => sound.stopped));
});

test('crossing the voice tempo limit restarts the subdivision cycle safely', async () => {
    const f = fixture();
    f.run('spokenCountEnabled = true; bpm = 150');
    await f.run('togglePlay()');
    f.run('currentBeat = 7; bpm = 151; scheduler()');
    assert.equal(f.run('scheduledSubdivision'), 1);
    assert.equal(f.run('currentBeat'), 1);
});

test('playback audio-session selection is optional and handles unsupported setters', async () => {
    const audioSession = { type: 'auto' };
    const f = fixture({ navigator: { audioSession } });
    await f.run('togglePlay()');
    assert.equal(audioSession.type, 'playback');
    await f.run('togglePlay()');
    assert.equal(audioSession.type, 'auto', 'Stop relinquishes explicit playback routing');
    const unsupported = fixture({ navigator: { audioSession: {
        set type(value) { throw new Error('Unsupported'); }
    } } });
    await unsupported.run('togglePlay()');
    assert.equal(unsupported.run('isPlaying'), true);
});

test('a delayed wake lock is released if playback has already stopped', async () => {
    const pending = deferred();
    let released = false;
    const f = fixture({ navigator: { wakeLock: { request: () => pending.promise } } });
    await f.run('togglePlay()');
    await f.run('togglePlay()');
    pending.resolve({ release: async () => { released = true; }, addEventListener() {} });
    await flush();
    assert.equal(released, true);
    assert.equal(f.run('wakeLock'), null);
});

test('the supported tempo limits and meters retain regular scheduled intervals', async () => {
    for (const bpm of [20, 60, 120, 230]) {
        for (const meter of [2, 3, 4]) {
            const f = fixture();
            f.run(`bpm = ${bpm}; timeSignature = ${meter}`);
            await f.run('togglePlay()');
            f.tick(6000);
            const sounds = f.audibleSources();
            assert.ok(sounds.length >= 2);
            for (let i = 1; i < sounds.length; i++) {
                assert.ok(Math.abs((sounds[i].time - sounds[i - 1].time) - 60 / bpm) < 1e-8);
            }
            await f.run('togglePlay()');
        }
    }
});
