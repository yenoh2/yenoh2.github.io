/*
 * Carina's Chompy Game — main game module.
 *
 * Design invariants (from Carina, age 6 — do not break):
 *   - The Chompy NEVER moves. Runner dots loop the yellow road automatically.
 *   - One tap = open the mouth. Good timing eats a runner.
 *   - A miss makes the road bulge wide around the Chompy so the runner
 *     swerves past and escapes.
 *   - 3 chomps in 2 minutes wins the round (+10). Timeout = friendly reset.
 *   - Red hearts decorate the four corners.
 *
 * From Carina's Idea Box (2026-08-15): a pause button, and TWO runner dots
 * ("let's have two dots in the game for chomping") — the second dot joins
 * from round 2 so round 1 stays a gentle warm-up.
 */
(() => {
  const W = 1200;
  const H = 900;
  const FIELD = { x: 50, y: 70, w: 1100, h: 760, r: 40 };
  const FIELD_CX = FIELD.x + FIELD.w / 2;
  const FIELD_CY = FIELD.y + FIELD.h / 2;

  // Winding S-curve loop, echoing the concept sketch.
  const CONTROL_POINTS = [
    { x: 200, y: 450 },
    { x: 230, y: 260 },
    { x: 400, y: 180 },
    { x: 560, y: 265 },
    { x: 720, y: 175 },
    { x: 930, y: 210 },
    { x: 1010, y: 400 },
    { x: 950, y: 610 },
    { x: 760, y: 700 },
    { x: 580, y: 615 },
    { x: 400, y: 710 },
    { x: 240, y: 640 },
  ];

  const ROAD_HALF = 34;
  const RUNNER_R = 22;
  const CHOMPY_R = 42;
  const BULGE_HALF = 235; // road-widening reach along the path (px)
  const BULGE_PEAK = 135; // how far the road edge swells inward (detour lane)
  const BULGE_OUTER = 0.35; // the outer edge also puffs a little — reads "wide!"
  const DETOUR_PEAK = 98; // how far a runner swerves (clears the Chompy)

  const BASE_LAP_SECONDS = 11;
  const MOUTH_OPEN_TIME = 0.08;
  const MOUTH_HOLD_TIME = 0.65;
  const MOUTH_CLOSE_TIME = 0.12;
  const MOUTH_COOLDOWN = 0.5;
  const COMMIT_LEAD = 90; // px before Chompy where escape/catch is decided
  const GRACE_SECONDS = 0.1; // a kind extra beat for almost-perfect taps
  const ROUND_SECONDS = 120;
  const CHOMPS_PER_ROUND = 3;
  const POINTS_PER_ROUND = 10;
  const SPEED_RAMP = 1.06;
  const SPEED_CAP = 1.65; // raised from 1.5 — session data showed 19 straight wins

  const path = ChompyPath.build(CONTROL_POINTS);
  const L = path.length;
  const S_C = path.nearestS(400, 180);
  const chompyPos = path.at(S_C);
  // The road bulges toward the inside of the field (there is always room).
  const outwardDot =
    chompyPos.nx * (chompyPos.x - FIELD_CX) + chompyPos.ny * (chompyPos.y - FIELD_CY);
  const K = outwardDot > 0 ? -1 : 1; // K*normal points toward the field center
  const CHOMPY_FACING = Math.atan2(-chompyPos.ty, -chompyPos.tx);
  const BASE_SPEED = L / BASE_LAP_SECONDS;
  // Staggered spawn points so the two dots arrive at the Chompy alternately.
  const SPAWN_POINTS = [(S_C + 0.42 * L) % L, (S_C + 0.75 * L) % L];

  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  canvas.width = W;
  canvas.height = H;

  // --- state ---------------------------------------------------------------
  let state = 'TITLE'; // TITLE | PLAYING | ROUND_WIN | TIME_UP | IDEA | PAUSED
  let prevOverlayState = 'TITLE'; // where IDEA / PAUSED should return to
  let round = 1;
  let score = 0;
  let chomps = 0;
  let timeLeft = ROUND_SECONDS;
  let speedMult = 1;
  let totalChomps = 0;
  let totalEscapes = 0;
  let totalTaps = 0;
  let winT = 0;
  let now = 0;
  let tutorialDone = localStorage.getItem('chompy-tutorial-done') === '1';

  const mouth = { phase: 'closed', t: 0, openness: 0 };

  // Carina's "two dots" — blue Dot and purple Plum.
  const RUNNER_STYLES = [
    { hi: '#7fd0ff', lo: '#2f9fe0', edge: '#1d7fc0', face: '#12283a' },
    { hi: '#d8b8ff', lo: '#9a63ee', edge: '#7a3fd0', face: '#2a1440' },
  ];

  function makeRunner(slot) {
    return {
      slot,
      active: false,
      s: 0,
      mode: 'run', // run | toMouth | eaten
      mood: 'happy', // happy | worried | thrilled
      escaping: false,
      spawnT: 0,
      eatT: 0,
      graceUntil: -1,
      moodUntil: 0,
      blinkAt: 2,
      blinking: 0,
      spawnTimer: -1, // <0 = not scheduled
    };
  }
  const runners = [makeRunner(0), makeRunner(1)];
  const desiredRunnerCount = () => (state === 'TITLE' || round < 2 ? 1 : 2);

  let bulge = 0;
  let bulgeTarget = 0;
  let munchT = -1;
  let lastTickSecond = -1;
  const particles = [];

  // --- DOM -----------------------------------------------------------------
  const $ = (id) => document.getElementById(id);
  const timerDigits = $('timerDigits');
  const timerFill = $('timerFill');
  const scoreNum = $('scoreNum');
  const slots = [...document.querySelectorAll('.slot')];
  const tapBubble = $('tapBubble');
  const stage = $('stage');

  // Keep the TAP! bubble parked beside the Chompy.
  tapBubble.style.left = (chompyPos.x / W) * 100 + '%';
  tapBubble.style.top = ((chompyPos.y - 85) / H) * 100 + '%';

  const RUNNER_FACE_SVG =
    '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#3fb0f0" stroke="#1d7fc0" stroke-width="2.5"/>' +
    '<circle cx="14" cy="17" r="2.6" fill="#123"/><circle cx="26" cy="17" r="2.6" fill="#123"/>' +
    '<path d="M13 25 Q20 31 27 25" stroke="#123" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
    '<circle cx="10.5" cy="23" r="2.6" fill="#ff9db4" opacity="0.85"/><circle cx="29.5" cy="23" r="2.6" fill="#ff9db4" opacity="0.85"/></svg>';

  function refreshSlots() {
    slots.forEach((el, i) => {
      if (i < chomps) {
        if (!el.classList.contains('filled')) {
          el.classList.add('filled');
          el.innerHTML = RUNNER_FACE_SVG;
        }
      } else {
        el.classList.remove('filled');
        el.textContent = i + 1;
      }
    });
  }

  function refreshScore(pop) {
    scoreNum.textContent = score;
    if (pop) {
      scoreNum.classList.remove('pop');
      void scoreNum.offsetWidth;
      scoreNum.classList.add('pop');
    }
  }

  function refreshTimer() {
    const t = Math.max(0, timeLeft);
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    timerDigits.textContent = m + ':' + String(s).padStart(2, '0');
    const frac = t / ROUND_SECONDS;
    timerFill.style.width = frac * 100 + '%';
    timerFill.className = frac > 0.4 ? 'green' : frac > 0.15 ? 'gold' : 'low';
  }

  // --- helpers -------------------------------------------------------------
  const dModSigned = (d) => {
    d = ((d % L) + L) % L;
    return d > L / 2 ? d - L : d;
  };
  const bump = (d, half) => {
    const a = Math.abs(d);
    if (a >= half) return 0;
    const c = Math.cos(((a / half) * Math.PI) / 2);
    return c * c;
  };
  /** Did a runner cross arc position `target` while moving `dist` from `prevS`? */
  const crossed = (prevS, dist, target) => {
    const gap = (target - prevS + L) % L;
    return gap > 1e-6 && gap <= dist + 1e-6;
  };
  const mouthIsOpen = () => mouth.openness >= 0.5;
  /** Seconds until the NEXT catchable runner reaches the decision point. */
  const timeToCommit = () => {
    let best = Infinity;
    for (const r of runners) {
      if (!r.active || r.mode !== 'run' || r.escaping) continue;
      const gap = (S_C - COMMIT_LEAD - r.s + L) % L;
      best = Math.min(best, gap / (BASE_SPEED * speedMult));
    }
    return best;
  };
  const hintStrength = () => Math.max(0, 1 - (round - 1) * 0.25);
  /** True when tapping right now would catch a runner. */
  const inTapWindow = () => {
    const ttc = timeToCommit();
    return ttc > 0 && ttc < MOUTH_HOLD_TIME * 0.85 && mouth.phase === 'closed';
  };

  // --- actions -------------------------------------------------------------
  function tapChomp() {
    totalTaps++;
    const ttc = timeToCommit();
    ChompyFeedback.logEvent('tap', {
      mouthPhase: mouth.phase,
      ttc: ttc === Infinity ? null : Math.round(ttc * 100) / 100,
    });
    if (mouth.phase !== 'closed') return;
    mouth.phase = 'opening';
    mouth.t = 0;
    ChompyAudio.open();
  }

  function startEscape(r) {
    r.escaping = true;
    bulgeTarget = 1;
    r.mood = 'thrilled';
    r.moodUntil = now + 2.2;
    if (state === 'PLAYING') {
      totalEscapes++;
      ChompyFeedback.logEvent('escape', { round });
    }
    ChompyAudio.escape();
    for (let i = 0; i < 6; i++) spawnParticle('dust', chompyPos.x, chompyPos.y + 30);
  }

  function endEscape(r) {
    r.escaping = false;
    if (!runners.some((x) => x.escaping)) bulgeTarget = 0;
  }

  function clearAllEscapes() {
    runners.forEach((r) => (r.escaping = false));
    bulgeTarget = 0;
  }

  function doChomp(r) {
    r.mode = 'eaten';
    r.eatT = 0;
    munchT = 0;
    for (let i = 0; i < 12; i++) spawnParticle('star', chompyPos.x, chompyPos.y);
    // The title screen plays itself — demo chomps must not count or teach.
    if (state !== 'PLAYING') {
      r.spawnTimer = 1.0;
      return;
    }
    chomps++;
    totalChomps++;
    ChompyAudio.chomp();
    ChompyFeedback.logEvent('chomp', { round, chompsThisRound: chomps, dot: r.slot });
    if (!tutorialDone) {
      tutorialDone = true;
      localStorage.setItem('chompy-tutorial-done', '1');
    }
    refreshSlots();
    if (chomps >= CHOMPS_PER_ROUND) {
      setTimeout(() => {
        if (state === 'PLAYING') startRoundWin();
      }, 550);
    } else {
      r.spawnTimer = 1.0;
    }
  }

  function spawnRunner(r) {
    r.active = true;
    r.s = SPAWN_POINTS[r.slot];
    r.mode = 'run';
    r.mood = 'happy';
    r.escaping = false;
    r.spawnT = 0;
    r.graceUntil = -1;
    r.blinkAt = now + 2.5;
    r.spawnTimer = -1;
    ChompyAudio.spawn();
  }

  function startRoundWin() {
    state = 'ROUND_WIN';
    winT = 0;
    score += POINTS_PER_ROUND;
    refreshScore(true);
    ChompyAudio.fanfare();
    ChompyFeedback.logEvent('roundWin', { round, score });
    $('winBanner').classList.remove('hidden');
    for (let i = 0; i < 60; i++) spawnParticle('confetti', W / 2 + (Math.random() - 0.5) * 500, 180);
    runners.forEach((r) => (r.active = false));
    clearAllEscapes();
  }

  function scheduleRoundSpawns(firstDelay) {
    runners.forEach((r) => {
      r.active = false;
      r.escaping = false;
      r.spawnTimer = -1;
    });
    runners[0].spawnTimer = firstDelay;
    runners[1].spawnTimer = firstDelay + 0.8; // second dot rolls in just after
  }

  function nextRound() {
    round++;
    speedMult = Math.min(SPEED_CAP, Math.pow(SPEED_RAMP, round - 1));
    chomps = 0;
    timeLeft = ROUND_SECONDS;
    lastTickSecond = -1;
    refreshSlots();
    refreshTimer();
    $('winBanner').classList.add('hidden');
    state = 'PLAYING';
    scheduleRoundSpawns(0.6);
    clearAllEscapes();
    ChompyFeedback.logEvent('roundStart', {
      round,
      speedMult: Math.round(speedMult * 100) / 100,
      dots: desiredRunnerCount(),
    });
  }

  function timeUp() {
    state = 'TIME_UP';
    ChompyAudio.timeUp();
    ChompyFeedback.logEvent('timeUp', { round, chomps, score });
    $('resetOverlay').classList.remove('hidden');
    clearAllEscapes();
  }

  function freshRun(fromTitle) {
    round = 1;
    score = 0;
    chomps = 0;
    speedMult = 1;
    timeLeft = ROUND_SECONDS;
    lastTickSecond = -1;
    refreshSlots();
    refreshScore(false);
    refreshTimer();
    scheduleRoundSpawns(fromTitle ? 1.2 : 0.6);
    clearAllEscapes();
    bulge = 0;
    mouth.phase = 'closed';
    mouth.openness = 0;
    state = 'PLAYING';
    ChompyFeedback.logEvent('runStart', {});
  }

  // --- update --------------------------------------------------------------
  function updateMouth(dt) {
    mouth.t += dt;
    switch (mouth.phase) {
      case 'opening':
        mouth.openness = Math.min(1, mouth.t / MOUTH_OPEN_TIME);
        if (mouth.t >= MOUTH_OPEN_TIME) {
          mouth.phase = 'open';
          mouth.t = 0;
        }
        break;
      case 'open':
        mouth.openness = 1;
        if (mouth.t >= MOUTH_HOLD_TIME) {
          mouth.phase = 'closing';
          mouth.t = 0;
        }
        break;
      case 'closing':
        mouth.openness = Math.max(0, 1 - mouth.t / MOUTH_CLOSE_TIME);
        if (mouth.t >= MOUTH_CLOSE_TIME) {
          mouth.phase = 'cooldown';
          mouth.t = 0;
          mouth.openness = 0;
        }
        break;
      case 'cooldown':
        if (mouth.t >= MOUTH_COOLDOWN) {
          mouth.phase = 'closed';
          mouth.t = 0;
        }
        break;
    }
  }

  // The title screen plays itself so kids see both outcomes before starting.
  let demoPlanned = false;
  function titleDemoAI() {
    const ttc = timeToCommit();
    if (ttc < 2 && !demoPlanned) {
      demoPlanned = true;
      if (Math.random() < 0.65) {
        setTimeout(() => {
          if (state === 'TITLE' && mouth.phase === 'closed') {
            mouth.phase = 'opening';
            mouth.t = 0;
          }
        }, Math.max(0, (ttc - 0.3) * 1000));
      }
    }
    if (ttc > 3) demoPlanned = false;
  }

  function updateRunner(r, dt) {
    r.spawnT += dt;
    if (r.mode === 'eaten') {
      r.eatT += dt;
      if (r.eatT >= 0.2) r.active = false;
      return;
    }

    const dist = BASE_SPEED * speedMult * dt;
    const prevS = r.s;
    r.s = (r.s + dist) % L;

    if (crossed(prevS, dist, (S_C - 300 + L) % L) && r.mode === 'run' && !r.escaping) {
      r.mood = 'worried';
      r.moodUntil = now + 3;
    }

    // The moment of truth: is the mouth open as this runner commits?
    if (r.mode === 'run' && !r.escaping && crossed(prevS, dist, (S_C - COMMIT_LEAD + L) % L)) {
      if (mouthIsOpen()) {
        r.mode = 'toMouth';
      } else {
        r.graceUntil = now + GRACE_SECONDS;
      }
    }
    if (r.graceUntil > 0 && r.mode === 'run' && !r.escaping) {
      if (mouthIsOpen()) {
        r.mode = 'toMouth';
        r.graceUntil = -1;
      } else if (now >= r.graceUntil) {
        r.graceUntil = -1;
        startEscape(r);
      }
    }

    if (r.mode === 'toMouth' && crossed(prevS, dist, (S_C - 14 + L) % L)) {
      doChomp(r);
      return;
    }

    if (r.escaping && crossed(prevS, dist, (S_C + BULGE_HALF + 40) % L)) {
      endEscape(r);
    }

    if (r.moodUntil && now > r.moodUntil) r.mood = 'happy';

    // Blinking keeps them alive.
    if (r.blinking > 0) r.blinking -= dt;
    else if (now >= r.blinkAt) {
      r.blinking = 0.13;
      r.blinkAt = now + 2 + Math.random() * 2.5;
    }
  }

  function updateRunners(dt) {
    const want = desiredRunnerCount();
    for (let i = 0; i < runners.length; i++) {
      const r = runners[i];
      if (r.active) {
        updateRunner(r, dt);
      } else if (i < want && (state === 'PLAYING' || state === 'TITLE')) {
        if (r.spawnTimer < 0) r.spawnTimer = 0.8;
        r.spawnTimer -= dt;
        if (r.spawnTimer <= 0) spawnRunner(r);
      }
    }
  }

  function update(dt) {
    now += dt;

    if (state === 'PLAYING') {
      updateMouth(dt);
      updateRunners(dt);
      timeLeft -= dt;
      const whole = Math.ceil(timeLeft);
      if (timeLeft <= 10.5 && whole !== lastTickSecond && timeLeft > 0) {
        lastTickSecond = whole;
        ChompyAudio.tick();
      }
      refreshTimer();
      if (timeLeft <= 0) timeUp();
    } else if (state === 'TITLE') {
      updateMouth(dt);
      titleDemoAI();
      updateRunners(dt);
    } else if (state === 'ROUND_WIN') {
      winT += dt;
      updateMouth(dt);
      if (winT > 2.6) nextRound();
    }
    // IDEA and PAUSED: the world holds its breath (only particles drift).

    bulge += (bulgeTarget - bulge) * Math.min(1, dt * (bulgeTarget > bulge ? 9 : 4));
    if (bulge < 0.005 && bulgeTarget === 0) bulge = 0;
    if (munchT >= 0) {
      munchT += dt;
      if (munchT > 0.5) munchT = -1;
    }

    // TAP! coaching bubble for the very first game only.
    const showTap = !tutorialDone && state === 'PLAYING' && inTapWindow();
    tapBubble.classList.toggle('hidden', !showTap);

    updateParticles(dt);
  }

  // --- particles -----------------------------------------------------------
  function spawnParticle(type, x, y) {
    const a = Math.random() * Math.PI * 2;
    const sp = type === 'confetti' ? 60 + Math.random() * 220 : 90 + Math.random() * 160;
    particles.push({
      type,
      x,
      y,
      vx: Math.cos(a) * sp,
      vy: Math.sin(a) * sp - (type === 'confetti' ? 60 : 100),
      life: type === 'confetti' ? 2 + Math.random() : 0.7 + Math.random() * 0.4,
      age: 0,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 8,
      color: ['#ff5c8a', '#ffd23e', '#3fb0f0', '#7ce051', '#b98ef7', '#ff9d3e'][
        Math.floor(Math.random() * 6)
      ],
      size: type === 'star' ? 10 + Math.random() * 8 : 6 + Math.random() * 7,
    });
  }

  function updateParticles(dt) {
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.age += dt;
      if (p.age >= p.life) {
        particles.splice(i, 1);
        continue;
      }
      p.vy += (p.type === 'confetti' ? 160 : 320) * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      if (p.type === 'confetti') p.vx *= 1 - 0.8 * dt;
    }
  }

  function drawStarShape(c, r) {
    c.beginPath();
    for (let i = 0; i < 10; i++) {
      const rad = i % 2 === 0 ? r : r * 0.45;
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      c.lineTo(Math.cos(a) * rad, Math.sin(a) * rad);
    }
    c.closePath();
  }

  function drawParticles() {
    for (const p of particles) {
      const fade = 1 - p.age / p.life;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.min(1, fade * 1.6);
      ctx.fillStyle = p.color;
      if (p.type === 'star') {
        drawStarShape(ctx, p.size);
        ctx.fill();
      } else if (p.type === 'confetti') {
        ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
      } else {
        ctx.globalAlpha = fade * 0.5;
        ctx.fillStyle = '#e8dfc8';
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  // --- drawing -------------------------------------------------------------
  const meadowImg = new Image();
  let meadowReady = false;
  meadowImg.onload = () => (meadowReady = true);
  // Single-file bundles (e.g. the shareable artifact) inject the meadow as a
  // data URI via window.MEADOW_SRC; the folder version loads it from assets/.
  meadowImg.src = window.MEADOW_SRC || 'assets/meadow.jpg';

  // Procedural meadow fallback (also shown until the image loads).
  const grassCanvas = document.createElement('canvas');
  grassCanvas.width = FIELD.w;
  grassCanvas.height = FIELD.h;
  (function paintGrass() {
    const g = grassCanvas.getContext('2d');
    let seed = 7;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    g.fillStyle = '#7ac74a';
    g.fillRect(0, 0, FIELD.w, FIELD.h);
    for (let i = 0; i < 46; i++) {
      g.fillStyle = i % 2 ? 'rgba(255,255,255,0.07)' : 'rgba(30,110,20,0.07)';
      g.beginPath();
      g.ellipse(rnd() * FIELD.w, rnd() * FIELD.h, 60 + rnd() * 130, 40 + rnd() * 80, rnd() * 3, 0, Math.PI * 2);
      g.fill();
    }
    g.strokeStyle = 'rgba(40,120,30,0.5)';
    g.lineWidth = 2;
    for (let i = 0; i < 260; i++) {
      const x = rnd() * FIELD.w;
      const y = rnd() * FIELD.h;
      g.beginPath();
      g.moveTo(x - 4, y + 5);
      g.lineTo(x, y - 4);
      g.lineTo(x + 4, y + 5);
      g.stroke();
    }
    const petals = ['#ffffff', '#ff9db4', '#ffb347'];
    for (let i = 0; i < 40; i++) {
      const x = rnd() * FIELD.w;
      const y = rnd() * FIELD.h;
      g.fillStyle = petals[Math.floor(rnd() * 3)];
      for (let pIdx = 0; pIdx < 5; pIdx++) {
        const a = (pIdx / 5) * Math.PI * 2;
        g.beginPath();
        g.arc(x + Math.cos(a) * 4, y + Math.sin(a) * 4, 3, 0, Math.PI * 2);
        g.fill();
      }
      g.fillStyle = '#ffd23e';
      g.beginPath();
      g.arc(x, y, 2.6, 0, Math.PI * 2);
      g.fill();
    }
  })();

  function roundedRectPath(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  function drawField() {
    // Sky
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#8fd0f6');
    sky.addColorStop(1, '#bfe6fb');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // Field card: white rim, then grass clipped inside.
    ctx.save();
    roundedRectPath(ctx, FIELD.x - 8, FIELD.y - 8, FIELD.w + 16, FIELD.h + 16, FIELD.r + 8);
    ctx.fillStyle = '#fff8ea';
    ctx.shadowColor = 'rgba(30,80,130,0.25)';
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 6;
    ctx.fill();
    ctx.restore();

    ctx.save();
    roundedRectPath(ctx, FIELD.x, FIELD.y, FIELD.w, FIELD.h, FIELD.r);
    ctx.clip();
    if (meadowReady) {
      const scale = Math.max(FIELD.w / meadowImg.width, FIELD.h / meadowImg.height);
      const dw = meadowImg.width * scale;
      const dh = meadowImg.height * scale;
      ctx.drawImage(meadowImg, FIELD.x + (FIELD.w - dw) / 2, FIELD.y + (FIELD.h - dh) / 2, dw, dh);
    } else {
      ctx.drawImage(grassCanvas, FIELD.x, FIELD.y);
    }
    ctx.restore();
  }

  function roadExtra(s) {
    if (bulge <= 0) return 0;
    return BULGE_PEAK * bump(dModSigned(s - S_C), BULGE_HALF) * bulge;
  }

  function drawRoad() {
    const step = 4;
    const count = Math.floor(L / path.spacing);

    // Base road: dark edge then yellow fill, stroked along the centerline.
    for (const [width, color] of [
      [ROAD_HALF * 2 + 12, '#d9a520'],
      [ROAD_HALF * 2, '#f8d84b'],
    ]) {
      ctx.beginPath();
      for (let i = 0; i <= count; i += step) {
        const p = path.samples[i % count];
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.closePath();
      ctx.lineWidth = width;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = color;
      ctx.stroke();
    }

    // The bulge: a widened patch around the Chompy, painted as a union of
    // stamped circles along the centerline (robust where the road curves —
    // per-sample edge offsetting folds into slivers on tight bends).
    if (bulge > 0.01) {
      const stampEdge = (pad, color) => {
        ctx.fillStyle = color;
        for (let s = S_C - BULGE_HALF; s <= S_C + BULGE_HALF; s += 5) {
          const extra = roadExtra(s);
          if (extra < 2) continue;
          const p = path.at(s);
          // Inner edge grows by `extra`, outer by BULGE_OUTER * extra.
          const r = ROAD_HALF + pad + extra * (1 + BULGE_OUTER) * 0.5;
          const c = K * extra * (1 - BULGE_OUTER) * 0.5;
          ctx.beginPath();
          ctx.arc(p.x + p.nx * c, p.y + p.ny * c, r, 0, Math.PI * 2);
          ctx.fill();
        }
      };
      stampEdge(6, '#d9a520');
      stampEdge(0, '#f8d84b');
    }
  }

  function drawHeart(c, x, y, size, wobble) {
    c.save();
    c.translate(x, y);
    c.scale(wobble, wobble);
    c.beginPath();
    c.moveTo(0, size * 0.35);
    c.bezierCurveTo(-size * 1.1, -size * 0.35, -size * 0.5, -size * 1.05, 0, -size * 0.45);
    c.bezierCurveTo(size * 0.5, -size * 1.05, size * 1.1, -size * 0.35, 0, size * 0.35);
    c.closePath();
    c.fillStyle = '#ff4757';
    c.strokeStyle = '#ffffff';
    c.lineWidth = 5;
    c.shadowColor = 'rgba(120,20,40,0.3)';
    c.shadowBlur = 8;
    c.shadowOffsetY = 3;
    c.fill();
    c.shadowColor = 'transparent';
    c.stroke();
    // little shine
    c.fillStyle = 'rgba(255,255,255,0.55)';
    c.beginPath();
    c.ellipse(-size * 0.38, -size * 0.42, size * 0.16, size * 0.1, -0.6, 0, Math.PI * 2);
    c.fill();
    c.restore();
  }

  function drawHearts() {
    const beat = 1 + 0.05 * Math.sin(now * 2.4);
    const beat2 = 1 + 0.05 * Math.sin(now * 2.4 + Math.PI);
    const inset = 10;
    drawHeart(ctx, FIELD.x + inset, FIELD.y + inset, 34, beat);
    drawHeart(ctx, FIELD.x + FIELD.w - inset, FIELD.y + inset, 34, beat2);
    drawHeart(ctx, FIELD.x + inset, FIELD.y + FIELD.h - inset, 34, beat2);
    drawHeart(ctx, FIELD.x + FIELD.w - inset, FIELD.y + FIELD.h - inset, 34, beat);
  }

  function drawDecor() {
    // A friendly tree (top-left corner pocket) and bush (bottom-right).
    ctx.save();
    ctx.translate(140, 150);
    ctx.fillStyle = '#8a5a2b';
    ctx.fillRect(-7, 8, 14, 26);
    for (const [dx, dy, r] of [[-22, -8, 26], [22, -8, 26], [0, -26, 30], [0, 2, 28]]) {
      ctx.fillStyle = '#3f9c3a';
      ctx.beginPath();
      ctx.arc(dx, dy, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.beginPath();
    ctx.arc(-10, -26, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(1052, 768);
    for (const [dx, r] of [[-26, 20], [0, 26], [26, 19]]) {
      ctx.fillStyle = '#46a63e';
      ctx.beginPath();
      ctx.arc(dx, 0, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function runnerDrawPos(r) {
    const p = path.at(r.s);
    const off = r.escaping ? K * DETOUR_PEAK * bump(dModSigned(r.s - S_C), BULGE_HALF) * bulge : 0;
    return { x: p.x + p.nx * off, y: p.y + p.ny * off, tx: p.tx, ty: p.ty };
  }

  function drawRunner(r) {
    if (!r.active) return;
    const style = RUNNER_STYLES[r.slot];
    let { x, y, tx } = runnerDrawPos(r);
    let scale = Math.min(1, r.spawnT / 0.25);
    scale = scale < 1 ? 1.3 - 0.3 * scale * scale : 1;
    if (r.mode === 'eaten') {
      const f = r.eatT / 0.2;
      x = x + (chompyPos.x - x) * f;
      y = y + (chompyPos.y - y) * f;
      scale = 1 - f;
      if (scale <= 0.02) return;
    }

    // shadow
    ctx.fillStyle = 'rgba(30,90,30,0.25)';
    ctx.beginPath();
    ctx.ellipse(x, y + RUNNER_R * 0.85, RUNNER_R * 0.85 * scale, RUNNER_R * 0.32 * scale, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.translate(x, y);
    const bounce = 1 + 0.04 * Math.sin(now * 14 + r.slot * 2);
    ctx.scale(scale * bounce, scale * (2 - bounce));

    // motion lines when zooming past
    if (r.mood === 'thrilled') {
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      for (const dy of [-8, 0, 8]) {
        ctx.beginPath();
        ctx.moveTo(-tx * 34 - 26, dy);
        ctx.lineTo(-tx * 34 - 40, dy);
        ctx.stroke();
      }
    }

    const grad = ctx.createRadialGradient(-6, -8, 4, 0, 0, RUNNER_R + 4);
    grad.addColorStop(0, style.hi);
    grad.addColorStop(1, style.lo);
    ctx.fillStyle = grad;
    ctx.strokeStyle = style.edge;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, RUNNER_R, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // face
    const dir = tx >= 0 ? 1 : -1;
    const eyeY = -5;
    ctx.fillStyle = style.face;
    if (r.blinking > 0 && r.mood === 'happy') {
      ctx.strokeStyle = style.face;
      ctx.lineWidth = 2.5;
      for (const ex of [-7, 7]) {
        ctx.beginPath();
        ctx.moveTo(ex - 3 + dir * 2, eyeY);
        ctx.lineTo(ex + 3 + dir * 2, eyeY);
        ctx.stroke();
      }
    } else {
      const eyeR = r.mood === 'worried' ? 4.6 : 3.2;
      for (const ex of [-7, 7]) {
        ctx.beginPath();
        ctx.arc(ex + dir * 2, eyeY, eyeR, 0, Math.PI * 2);
        ctx.fill();
        if (r.mood === 'worried') {
          ctx.fillStyle = '#fff';
          ctx.beginPath();
          ctx.arc(ex + dir * 2 - 1.4, eyeY - 1.4, 1.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = style.face;
        }
      }
    }
    ctx.strokeStyle = style.face;
    ctx.lineWidth = 2.6;
    ctx.lineCap = 'round';
    ctx.beginPath();
    if (r.mood === 'worried') {
      ctx.arc(dir * 2, 8, 4, 0, Math.PI * 2); // little "o" mouth
    } else if (r.mood === 'thrilled') {
      ctx.arc(dir * 2, 5, 7, 0.15 * Math.PI, 0.85 * Math.PI); // big grin
    } else {
      ctx.arc(dir * 2, 6, 5, 0.2 * Math.PI, 0.8 * Math.PI);
    }
    ctx.stroke();
    // cheeks
    ctx.fillStyle = 'rgba(255,150,180,0.75)';
    for (const ex of [-12, 12]) {
      ctx.beginPath();
      ctx.arc(ex + dir * 2, 4, 3.4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawChompy() {
    const x = chompyPos.x;
    const y = chompyPos.y;

    // Sparkle "tap now!" ring — strong for beginners, fades with rounds.
    if ((state === 'PLAYING' || state === 'TITLE') && inTapWindow()) {
      const strength = state === 'TITLE' ? 1 : hintStrength();
      if (strength > 0) {
        const pulse = 1 + 0.1 * Math.sin(now * 10);
        ctx.save();
        ctx.globalAlpha = strength * (0.65 + 0.25 * Math.sin(now * 10));
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(x, y, (CHOMPY_R + 16) * pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = '#ff8a1f';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(x, y, (CHOMPY_R + 16) * pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = '#ff8a1f';
        for (let i = 0; i < 3; i++) {
          const a = now * 2 + (i * Math.PI * 2) / 3;
          ctx.save();
          ctx.translate(x + Math.cos(a) * (CHOMPY_R + 30), y + Math.sin(a) * (CHOMPY_R + 30));
          ctx.rotate(a);
          drawStarShape(ctx, 7);
          ctx.fill();
          ctx.restore();
        }
        ctx.restore();
      }
    }

    // shadow
    ctx.fillStyle = 'rgba(30,90,30,0.25)';
    ctx.beginPath();
    ctx.ellipse(x, y + CHOMPY_R * 0.9, CHOMPY_R * 0.9, CHOMPY_R * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.translate(x, y);
    // idle breathing + munch bounce + cooldown squish
    let sx = 1 + 0.02 * Math.sin(now * 3);
    let sy = 1 - 0.02 * Math.sin(now * 3);
    if (munchT >= 0) {
      const m = Math.sin(Math.min(1, munchT / 0.45) * Math.PI);
      sx += 0.1 * m;
      sy += 0.1 * m;
    }
    if (mouth.phase === 'cooldown') {
      sy *= 0.94;
      sx *= 1.03;
    }
    ctx.scale(sx, sy);
    ctx.rotate(CHOMPY_FACING);

    // munch = fast auto chomping regardless of player mouth state
    let openness = mouth.openness;
    if (munchT >= 0 && munchT < 0.4) openness = Math.abs(Math.sin(munchT * 22));
    const mouthAngle = (Math.PI / 180) * (4 + 52 * openness);

    // open-mouth interior
    if (openness > 0.05) {
      ctx.fillStyle = '#7a1230';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, CHOMPY_R * 0.94, -mouthAngle, mouthAngle);
      ctx.closePath();
      ctx.fill();
    }

    // body (pac-man wedge)
    const grad = ctx.createRadialGradient(-CHOMPY_R * 0.3, -CHOMPY_R * 0.35, 8, 0, 0, CHOMPY_R + 6);
    grad.addColorStop(0, '#ff6b8d');
    grad.addColorStop(1, '#e0264f');
    ctx.fillStyle = grad;
    ctx.strokeStyle = '#a81238';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, CHOMPY_R, mouthAngle, Math.PI * 2 - mouthAngle);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // shine
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.beginPath();
    ctx.ellipse(-CHOMPY_R * 0.32, -CHOMPY_R * 0.45, CHOMPY_R * 0.28, CHOMPY_R * 0.16, -0.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // eye (drawn unrotated so it always looks upright and cute)
    ctx.save();
    ctx.translate(x, y);
    const eyeBaseX = 6;
    const eyeBaseY = -CHOMPY_R * 0.52;
    let lookX = 0;
    let lookY = 0;
    let bestD = Infinity;
    for (const r of runners) {
      if (!r.active || r.mode === 'eaten') continue;
      const rp = runnerDrawPos(r);
      const dx = rp.x - x;
      const dy = rp.y - y;
      const d = Math.hypot(dx, dy) || 1;
      if (d < bestD) {
        bestD = d;
        lookX = (dx / d) * 3.5;
        lookY = (dy / d) * 3.5;
      }
    }
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#a81238';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(eyeBaseX, eyeBaseY, 10.5, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#241326';
    ctx.beginPath();
    ctx.arc(eyeBaseX + lookX, eyeBaseY + lookY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(eyeBaseX + lookX - 1.6, eyeBaseY + lookY - 1.8, 1.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawWinText() {
    if (state !== 'ROUND_WIN') return;
    const f = Math.min(1, winT / 0.4);
    const scale = 0.5 + 0.5 * (1 - (1 - f) * (1 - f));
    ctx.save();
    ctx.translate(W / 2, H / 2 - 40);
    ctx.scale(scale, scale);
    ctx.font = "900 110px 'Comic Sans MS', 'Segoe Print', sans-serif";
    ctx.textAlign = 'center';
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#fff';
    ctx.fillStyle = '#ff9d1f';
    ctx.strokeText('+10', 0, 0);
    ctx.fillText('+10', 0, 0);
    ctx.restore();
  }

  function draw() {
    drawField();
    drawDecor();
    drawRoad();
    // Draw the second dot first so the blue one leads visually when close.
    for (let i = runners.length - 1; i >= 0; i--) drawRunner(runners[i]);
    drawChompy();
    drawParticles();
    drawHearts();
    drawWinText();
  }

  // --- main loop -----------------------------------------------------------
  let lastFrame = performance.now();
  let debugPaused = false;
  let debugBulge = false;
  function frame(t) {
    const dt = Math.min(0.05, (t - lastFrame) / 1000);
    lastFrame = t;
    if (debugBulge) bulgeTarget = 1;
    if (!debugPaused) update(dt);
    draw();
    requestAnimationFrame(frame);
  }

  // --- input ---------------------------------------------------------------
  function primaryAction() {
    ChompyAudio.ensure();
    if (state === 'PLAYING') tapChomp();
    else if (state === 'PAUSED') resumeFromPause();
    else if (state === 'TIME_UP') {
      $('resetOverlay').classList.add('hidden');
      freshRun(false);
    }
  }

  stage.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.ui-button') || e.target.closest('.overlay-panel')) return;
    primaryAction();
  });
  window.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    if (e.code === 'Space' || e.code === 'Enter') {
      if (state === 'IDEA') return;
      if (state === 'TITLE') return startGame();
      e.preventDefault();
      primaryAction();
    }
    if (e.code === 'KeyP' && (state === 'PLAYING' || state === 'PAUSED')) {
      togglePause();
    }
  });

  function startGame() {
    ChompyAudio.ensure();
    $('titleOverlay').classList.add('hidden');
    freshRun(true);
  }
  $('playBtn').addEventListener('click', startGame);
  $('resetOverlay').addEventListener('pointerdown', () => {
    if (state === 'TIME_UP') {
      ChompyAudio.ensure();
      $('resetOverlay').classList.add('hidden');
      freshRun(false);
    }
  });

  // Pause (Carina's request #1)
  function pauseGame() {
    if (state !== 'PLAYING') return;
    prevOverlayState = state;
    state = 'PAUSED';
    $('pauseOverlay').classList.remove('hidden');
    ChompyFeedback.logEvent('pause');
  }
  function resumeFromPause() {
    if (state !== 'PAUSED') return;
    $('pauseOverlay').classList.add('hidden');
    state = prevOverlayState;
    lastFrame = performance.now();
    ChompyFeedback.logEvent('resume');
  }
  function togglePause() {
    if (state === 'PAUSED') resumeFromPause();
    else pauseGame();
  }
  $('pauseBtn').addEventListener('click', () => {
    ChompyAudio.ensure();
    togglePause();
  });
  $('resumeBtn').addEventListener('click', resumeFromPause);
  $('pauseOverlay').addEventListener('pointerdown', (e) => {
    if (e.target.closest('.overlay-panel') && e.target.id !== 'resumeBtn') return;
    resumeFromPause();
  });
  // Walking away (tab switch, tablet sleep) pauses automatically.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && state === 'PLAYING') pauseGame();
  });

  // Sound toggle
  const soundBtn = $('soundBtn');
  function syncSound() {
    soundBtn.textContent = ChompyAudio.isMuted() ? '🔇' : '🔊';
  }
  soundBtn.addEventListener('click', () => {
    ChompyAudio.ensure();
    ChompyAudio.setMuted(!ChompyAudio.isMuted());
    syncSound();
  });
  syncSound();

  // Idea box
  $('ideaBtn').addEventListener('click', () => {
    if (state !== 'PLAYING' && state !== 'TITLE' && state !== 'PAUSED') return;
    if (state === 'PAUSED') $('pauseOverlay').classList.add('hidden');
    else prevOverlayState = state;
    state = 'IDEA';
    ChompyFeedback.open(() => {
      state = prevOverlayState;
      lastFrame = performance.now();
    });
  });

  ChompyFeedback.wire(() => ({
    state: state === 'IDEA' || state === 'PAUSED' ? prevOverlayState : state,
    round,
    score,
    chompsThisRound: chomps,
    timeLeft: Math.round(timeLeft * 10) / 10,
    speedMult: Math.round(speedMult * 100) / 100,
    dots: desiredRunnerCount(),
    totalChomps,
    totalEscapes,
    totalTaps,
  }));
  ChompyFeedback.logEvent('boot', { tutorialDone });

  refreshSlots();
  refreshTimer();
  refreshScore(false);
  requestAnimationFrame(frame);

  // Debug/playtest handle (also handy when iterating from Carina's feedback).
  window.ChompyDebug = {
    get: () => ({
      state,
      round,
      score,
      chomps,
      timeLeft: Math.round(timeLeft * 100) / 100,
      speedMult,
      runners: runners.map((r) => ({
        slot: r.slot,
        active: r.active,
        s: Math.round(r.s),
        mode: r.mode,
        escaping: r.escaping,
      })),
      mouthPhase: mouth.phase,
      escaping: runners.some((r) => r.escaping),
      bulge: Math.round(bulge * 100) / 100,
      ttc: (() => {
        const t = timeToCommit();
        return t === Infinity ? null : Math.round(t * 1000) / 1000;
      })(),
      sCommit: Math.round((S_C - COMMIT_LEAD + L) % L),
      pathLength: Math.round(L),
      totalChomps,
      totalEscapes,
      totalTaps,
    }),
    tap: () => primaryAction(),
    play: () => {
      if (state === 'TITLE') startGame();
    },
    setTimeLeft: (t) => {
      timeLeft = t;
    },
    pause: (p) => {
      debugPaused = p;
      lastFrame = performance.now();
    },
    forceBulge: (b) => {
      debugBulge = b;
      if (!b && !runners.some((r) => r.escaping)) bulgeTarget = 0;
    },
  };
})();
