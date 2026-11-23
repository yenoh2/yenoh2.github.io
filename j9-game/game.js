/* J9: After Hours — a two-fighter office brawl. Plain canvas, no build step. */
(() => {
'use strict';

const W = 960, H = 540, FLOOR = 470, WALL_L = 60, WALL_R = W - 60;
const GRAVITY = 2400, WALK = 230, JUMP_V = -900;
const ROUND_TIME = 60, ROUNDS_TO_WIN = 2, MAX_HP = 100;

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
const FONT = '"Press Start 2P", "Courier New", monospace';

// ---------------------------------------------------------------- roster
// Rename the fighters here.
const ROSTER = [
  { id: 'bald', name: 'THE CLOSER',  special: 'HOSTILE TAKEOVER', color: '#d8362f' },
  { id: 'tie',  name: 'THE POINTER', special: 'POINT OF ORDER',   color: '#5b8be0' },
];

const ATTACKS = {
  punch:   { startup: .07, active: .10, recover: .13, dmg: 6,  reach: 112, push: 170, stun: .26, meter: 9 },
  kick:    { startup: .13, active: .12, recover: .22, dmg: 10, reach: 140, push: 260, stun: .34, meter: 13 },
  special: { startup: .18, active: .26, recover: .34, dmg: 24, reach: 150, push: 520, stun: .5, meter: 0, lunge: 620, knockdown: true },
};

// ---------------------------------------------------------------- assets
const images = {};
let assetsPending = 0;
function loadImage(key, src) {
  assetsPending++;
  const img = new Image();
  img.onload = () => { assetsPending--; };
  img.onerror = () => { assetsPending--; img.failed = true; };
  img.src = src;
  images[key] = img;
}
const SPR = window.SPRITES || { chars: {} };
for (const c of ROSTER) {
  const def = SPR.chars[c.id];
  if (!def) continue;
  for (const pose of def.poses) loadImage(`${c.id}/${pose}`, `assets/${c.id}/${pose}.png`);
  loadImage(`${c.id}/portrait`, `assets/${c.id}/portrait.png`);
}
loadImage('arena', 'assets/arena.png');

// ---------------------------------------------------------------- audio
let actx = null;
function audio() {
  if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { actx = null; } }
  if (actx && actx.state === 'suspended') actx.resume();
  return actx;
}
function tone(freq, dur, type = 'square', vol = .12, slide = 0) {
  const a = audio(); if (!a) return;
  const o = a.createOscillator(), g = a.createGain(), t = a.currentTime;
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur);
  o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur);
}
function noise(dur, vol = .2, cutoff = 1200) {
  const a = audio(); if (!a) return;
  const n = Math.floor(a.sampleRate * dur), buf = a.createBuffer(1, n, a.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
  const s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
  f.type = 'lowpass'; f.frequency.value = cutoff; g.gain.value = vol;
  s.buffer = buf; s.connect(f).connect(g).connect(a.destination); s.start();
}
const sfx = {
  swing: () => noise(.08, .08, 3000),
  hit: () => { noise(.12, .3, 900); tone(140, .1, 'square', .12, -80); },
  heavy: () => { noise(.25, .4, 600); tone(90, .25, 'sawtooth', .16, -50); },
  block: () => { noise(.06, .15, 2500); tone(320, .05, 'triangle', .08); },
  jump: () => tone(260, .12, 'square', .05, 240),
  select: () => tone(660, .07, 'square', .07),
  confirm: () => { tone(520, .08, 'square', .08); setTimeout(() => tone(780, .14, 'square', .08), 80); },
  special: () => { tone(220, .3, 'sawtooth', .12, 600); },
  gong: () => { tone(110, 1.2, 'sine', .25); tone(165, 1.0, 'triangle', .1); noise(.4, .12, 500); },
  ko: () => { tone(400, .6, 'sawtooth', .15, -340); noise(.5, .3, 400); },
};

// ---------------------------------------------------------------- input
const keys = new Set(), pressed = new Set();
addEventListener('keydown', e => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'Slash'].includes(e.code)) e.preventDefault();
  if (!keys.has(e.code)) pressed.add(e.code);
  keys.add(e.code); audio();
});
addEventListener('keyup', e => keys.delete(e.code));
addEventListener('blur', () => keys.clear());

const BINDS = [
  { left: 'KeyA', right: 'KeyD', up: 'KeyW', block: 'KeyS', punch: 'KeyF', kick: 'KeyG', special: 'KeyH' },
  { left: 'ArrowLeft', right: 'ArrowRight', up: 'ArrowUp', block: 'ArrowDown', punch: 'Comma', kick: 'Period', special: 'Slash' },
];
function readHuman(i) {
  const b = BINDS[i];
  return {
    left: keys.has(b.left), right: keys.has(b.right), up: pressed.has(b.up), block: keys.has(b.block),
    punch: pressed.has(b.punch), kick: pressed.has(b.kick), special: pressed.has(b.special),
  };
}

// ---------------------------------------------------------------- fighter
class Fighter {
  constructor(slot, charIndex, isCpu) {
    this.slot = slot; this.char = ROSTER[charIndex]; this.cpu = isCpu;
    this.wins = 0; this.ai = { timer: 0, move: 0, wantBlock: 0 };
    this.reset();
  }
  reset() {
    this.x = this.slot === 0 ? 300 : 660; this.y = FLOOR;
    this.vx = 0; this.vy = 0; this.face = this.slot === 0 ? 1 : -1;
    this.hp = MAX_HP; this.shownHp = MAX_HP; this.meter = 0;
    this.state = 'idle'; this.t = 0; this.attack = null; this.hitDone = false;
    this.flash = 0; this.walkT = 0;
  }
  get grounded() { return this.y >= FLOOR; }
  get busy() { return ['punch', 'kick', 'special', 'hurt', 'fall', 'down', 'win'].includes(this.state); }
  set(state) { this.state = state; this.t = 0; }

  startAttack(kind) {
    this.attack = ATTACKS[kind]; this.hitDone = false; this.set(kind);
    if (kind === 'special') { this.meter = 0; sfx.special(); game.banner(this.char.special, this.char.color, .9); }
    else sfx.swing();
  }

  update(dt, inp, foe) {
    this.t += dt; this.flash = Math.max(0, this.flash - dt);
    this.shownHp += (this.hp - this.shownHp) * Math.min(1, dt * 6);
    const s = this.state;

    if (!this.busy && this.grounded) this.face = foe.x >= this.x ? 1 : -1;

    if (s === 'idle' || s === 'walk' || s === 'block') {
      if (inp.special && this.meter >= 100) this.startAttack('special');
      else if (inp.punch) this.startAttack('punch');
      else if (inp.kick) this.startAttack('kick');
      else if (inp.block) { this.vx = 0; if (s !== 'block') this.set('block'); }
      else {
        const dir = (inp.right ? 1 : 0) - (inp.left ? 1 : 0);
        this.vx = dir * WALK * (dir === this.face ? 1 : .8);
        if (inp.up) { this.vy = JUMP_V; this.y -= 1; this.set('jump'); sfx.jump(); }
        else if (dir) { if (s !== 'walk') this.set('walk'); this.walkT += dt; }
        else if (s !== 'idle') this.set('idle');
      }
    } else if (s === 'jump') {
      if (inp.kick && !this.attack) { this.attack = ATTACKS.kick; this.hitDone = false; this.airKickT = 0; sfx.swing(); }
      if (this.attack) this.airKickT += dt;
      if (this.grounded) { this.attack = null; this.vx = 0; this.set('idle'); }
    } else if (s === 'punch' || s === 'kick' || s === 'special') {
      const a = this.attack, total = a.startup + a.active + a.recover;
      if (s === 'special') this.vx = (this.t > a.startup && this.t < a.startup + a.active) ? this.face * a.lunge : 0;
      else this.vx = 0;
      if (this.t >= total) { this.attack = null; this.vx = 0; this.set('idle'); }
    } else if (s === 'hurt') {
      this.vx *= Math.pow(.002, dt);
      if (this.t >= this.stun) { this.vx = 0; this.set('idle'); }
    } else if (s === 'fall') {
      if (this.grounded && this.t > .1) { this.vx = 0; this.set('down'); game.shake = .25; noise(.15, .25, 300); }
    } else if (s === 'down') {
      if (this.hp > 0 && this.t >= .9) this.set('idle');
    }

    // physics
    if (!this.grounded || this.vy < 0) this.vy += GRAVITY * dt;
    this.x += this.vx * dt; this.y += this.vy * dt;
    if (this.y >= FLOOR) { this.y = FLOOR; this.vy = 0; }
    this.x = Math.max(WALL_L, Math.min(WALL_R, this.x));
  }

  attackActive() {
    const a = this.attack; if (!a || this.hitDone) return false;
    const t = this.state === 'jump' ? this.airKickT : this.t;
    return t >= a.startup && t <= a.startup + a.active;
  }

  takeHit(a, from) {
    const blocking = this.state === 'block' && this.face === -from.face;
    if (blocking) {
      this.hp = Math.max(1, this.hp - a.dmg * .12);
      this.x += from.face * a.push * .12; sfx.block();
      game.spark(this.x - this.face * -30, this.y - 190, '#9fd0ff', 6);
      return;
    }
    this.hp = Math.max(0, this.hp - a.dmg);
    this.meter = Math.min(100, this.meter + a.dmg * .8);
    from.meter = Math.min(100, from.meter + a.meter);
    this.flash = .12; this.attack = null;
    const heavy = a.knockdown || this.hp <= 0 || !this.grounded;
    game.spark((this.x + from.x) / 2 + from.face * 30, this.y - (a === ATTACKS.kick ? 170 : 200), heavy ? '#ffd24a' : '#fff', heavy ? 16 : 8);
    game.hitstop = heavy ? .12 : .05; game.shake = heavy ? .3 : .12;
    if (heavy) {
      this.vx = from.face * 380; this.vy = -620; this.y -= 1; this.set('fall'); sfx.heavy();
    } else {
      this.vx = from.face * a.push; this.stun = a.stun; this.set('hurt'); sfx.hit();
    }
  }

  // which sprite pose to show
  pose() {
    switch (this.state) {
      case 'walk': return Math.floor(this.walkT * 7) % 2 ? 'walk' : 'idle';
      case 'jump': return this.attack && this.airKickT < .4 ? 'kick' : 'walk';
      case 'punch': case 'kick': case 'special': {
        const a = this.attack; if (!a) return 'idle';
        return this.t < a.startup * .6 ? 'idle' : this.state;
      }
      case 'down': return 'ko';
      default: return this.state; // idle block hurt fall win
    }
  }

  draw() {
    const def = SPR.chars[this.char.id];
    // shadow
    const sh = 1 - Math.min(1, (FLOOR - this.y) / 300) * .5;
    ctx.fillStyle = 'rgba(0,0,0,.45)';
    ctx.beginPath(); ctx.ellipse(this.x, FLOOR + 4, 70 * sh, 11 * sh, 0, 0, 7); ctx.fill();

    const pose = this.pose();
    const img = images[`${this.char.id}/${pose}`];
    const bob = (this.state === 'idle') ? Math.round(Math.sin(this.t * 5) * 2) : 0;
    ctx.save();
    ctx.translate(Math.round(this.x), Math.round(this.y + bob));
    ctx.scale(this.face, 1);
    if (def && img && img.complete && !img.failed) {
      const sc = def.scale;
      if (this.mirrorTint) ctx.filter = 'hue-rotate(150deg) saturate(1.2)';
      if (this.flash > 0) ctx.filter = 'brightness(2.2)';
      ctx.drawImage(img, -def.ax * sc, -def.ay * sc, img.width * sc, img.height * sc);
    } else {
      ctx.fillStyle = this.char.color; ctx.fillRect(-35, -280, 70, 280);
    }
    ctx.restore();

    if (this.state === 'down' && this.hp <= 0) drawStars(this.x - this.face * 90, FLOOR - 70, this.t);
  }
}

function drawStars(x, y, t) {
  for (let i = 0; i < 4; i++) {
    const a = t * 4 + i * Math.PI / 2, sx = x + Math.cos(a) * 34, sy = y + Math.sin(a) * 9;
    ctx.fillStyle = '#ffd83a'; star(sx, sy, 7);
  }
}
function star(x, y, r) {
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r;
    ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
  }
  ctx.closePath(); ctx.fill();
}

// ---------------------------------------------------------------- CPU
function readCpu(me, foe, dt) {
  const ai = me.ai, inp = { left: false, right: false, up: false, block: false, punch: false, kick: false, special: false };
  const dist = Math.abs(foe.x - me.x), toward = foe.x > me.x ? 'right' : 'left', away = toward === 'right' ? 'left' : 'right';
  ai.timer -= dt; ai.wantBlock -= dt;
  const foeSwinging = ['punch', 'kick', 'special'].includes(foe.state);
  if (foeSwinging && foe.t < .06 && dist < 190 && Math.random() < .45) ai.wantBlock = .35;
  if (ai.wantBlock > 0) { inp.block = true; return inp; }
  if (ai.timer <= 0) {
    ai.timer = .12 + Math.random() * .22;
    const r = Math.random();
    if (dist > 150) ai.move = r < .8 ? 1 : (r < .9 ? 0 : -1);
    else if (dist < 80) ai.move = r < .5 ? -1 : 0;
    else ai.move = r < .25 ? -1 : (r < .5 ? 1 : 0);
    if (me.meter >= 100 && dist < 260 && dist > 90 && r < .6) inp.special = true;
    else if (dist < 118 && r < .5) inp.punch = true;
    else if (dist < 146 && r < .75) inp.kick = true;
    else if (dist > 220 && r > .96) inp.up = true;
  }
  if (ai.move > 0) inp[toward] = true; else if (ai.move < 0) inp[away] = true;
  return inp;
}

// ---------------------------------------------------------------- game
const game = {
  scene: 'title', menu: 0, mode: 'cpu', pick: [0, 1], picked: [false, false],
  f: [], round: 1, timer: ROUND_TIME, phase: 'intro', phaseT: 0,
  hitstop: 0, shake: 0, sparks: [], bannerMsg: null, time: 0, winner: null,

  banner(text, color, dur) { this.bannerMsg = { text, color, t: dur, dur }; },
  spark(x, y, color, n) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 7, v = 120 + Math.random() * 380;
      this.sparks.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, t: .25 + Math.random() * .2, color });
    }
  },

  startMatch() {
    this.f = [new Fighter(0, this.pick[0], false), new Fighter(1, this.pick[1], this.mode === 'cpu')];
    this.f[1].mirrorTint = this.pick[0] === this.pick[1];
    this.round = 1; this.scene = 'fight'; this.startRound();
  },
  startRound() {
    this.f.forEach(f => f.reset()); this.timer = ROUND_TIME; this.phase = 'intro'; this.phaseT = 0;
    this.sparks = []; this.winner = null; sfx.gong();
  },

  update(dt) {
    this.time += dt;
    if (this.scene === 'title') return this.updateTitle();
    if (this.scene === 'select') return this.updateSelect();
    if (this.scene === 'fight') return this.updateFight(dt);
  },

  updateTitle() {
    if (pressed.has('ArrowUp') || pressed.has('KeyW') || pressed.has('ArrowDown') || pressed.has('KeyS')) { this.menu ^= 1; sfx.select(); }
    if (pressed.has('Enter') || pressed.has('NumpadEnter') || pressed.has('Space') || pressed.has('KeyF')) {
      this.mode = this.menu === 0 ? 'cpu' : 'pvp'; this.scene = 'select'; this.picked = [false, false];
      this.pick = [0, 1]; sfx.confirm();
    }
  },

  updateSelect() {
    const n = ROSTER.length;
    const step = (i, l, r, ok) => {
      if (this.picked[i]) return;
      if (pressed.has(l)) { this.pick[i] = (this.pick[i] + n - 1) % n; sfx.select(); }
      if (pressed.has(r)) { this.pick[i] = (this.pick[i] + 1) % n; sfx.select(); }
      if (ok.some(k => pressed.has(k))) { this.picked[i] = true; sfx.confirm(); }
    };
    if (this.mode === 'pvp') {
      step(0, 'KeyA', 'KeyD', ['KeyF']);
      step(1, 'ArrowLeft', 'ArrowRight', ['Comma']);
      // Enter locks in whoever hasn't confirmed yet and starts the match
      if (pressed.has('Enter') || pressed.has('NumpadEnter')) { this.picked = [true, true]; sfx.confirm(); }
    } else if (!this.picked[0]) {
      step(0, 'KeyA', 'KeyD', ['KeyF', 'Enter', 'NumpadEnter', 'Space']);
      if (!this.picked[0]) step(0, 'ArrowLeft', 'ArrowRight', []);
      if (this.picked[0]) { this.pick[1] = (this.pick[0] + 1) % n; this.picked[1] = true; }
    }
    if (pressed.has('Escape')) { this.scene = 'title'; return; }
    if (this.picked[0] && this.picked[1]) {
      this.selectDone = (this.selectDone || 0) + 1;
      if (this.selectDone > 20) { this.selectDone = 0; this.startMatch(); }
    }
  },

  updateFight(dt) {
    if (pressed.has('Escape')) { this.scene = 'title'; return; }
    this.phaseT += dt;
    if (this.bannerMsg && (this.bannerMsg.t -= dt) <= 0) this.bannerMsg = null;
    this.shake = Math.max(0, this.shake - dt);
    for (const s of this.sparks) { s.x += s.vx * dt; s.y += s.vy * dt; s.vy += 900 * dt; s.t -= dt; }
    this.sparks = this.sparks.filter(s => s.t > 0);
    if (this.hitstop > 0) { this.hitstop -= dt; return; }

    const [a, b] = this.f, none = {};
    const live = this.phase === 'fight';
    const ia = live ? readHuman(0) : none;
    const ib = live ? (b.cpu ? readCpu(b, a, dt) : readHuman(1)) : none;
    a.update(dt, ia, b); b.update(dt, ib, a);

    // keep bodies from overlapping
    if (a.grounded && b.grounded) {
      const gap = 74, d = b.x - a.x;
      if (Math.abs(d) < gap) {
        const push = (gap - Math.abs(d)) / 2 * (d >= 0 ? 1 : -1);
        a.x -= push; b.x += push;
        a.x = Math.max(WALL_L, Math.min(WALL_R, a.x)); b.x = Math.max(WALL_L, Math.min(WALL_R, b.x));
      }
    }

    if (live) {
      for (const [p, q] of [[a, b], [b, a]]) {
        if (!p.attackActive()) continue;
        if (['fall', 'down'].includes(q.state)) continue;
        const dx = (q.x - p.x) * p.face, dy = Math.abs(q.y - p.y);
        if (dx > -20 && dx < p.attack.reach && dy < 150) { p.hitDone = true; q.takeHit(p.attack, p); }
      }
      this.timer -= dt;
      const dead = this.f.find(f => f.hp <= 0);
      if (dead || this.timer <= 0) {
        this.timer = Math.max(0, this.timer);
        this.winner = dead ? this.f[1 - dead.slot] : (a.hp === b.hp ? null : (a.hp > b.hp ? a : b));
        if (this.winner) this.winner.wins++;
        this.phase = 'ko'; this.phaseT = 0; this.koText = dead ? 'K.O.' : (this.winner ? 'TIME' : 'DRAW');
        sfx.ko();
      }
    } else if (this.phase === 'intro') {
      if (this.phaseT > 1.3 && !this.fightCalled) { this.fightCalled = true; sfx.confirm(); }
      if (this.phaseT > 2.1) { this.phase = 'fight'; this.fightCalled = false; }
    } else if (this.phase === 'ko') {
      const w = this.winner;
      if (w && this.phaseT > 1.2 && w.grounded && !['win', 'fall', 'down'].includes(w.state)) { w.vx = 0; w.attack = null; w.set('win'); }
      if (this.phaseT > 3.6) {
        if (w && w.wins >= ROUNDS_TO_WIN) { this.phase = 'over'; this.phaseT = 0; }
        else { this.round++; this.startRound(); }
      }
    } else if (this.phase === 'over') {
      if (this.phaseT > 1 && (pressed.has('Enter') || pressed.has('NumpadEnter') || pressed.has('Space') || pressed.has('KeyF'))) this.scene = 'title';
    }
  },

  // ------------------------------------------------------------ drawing
  draw() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.filter = 'none';
    if (this.scene === 'fight' && this.shake > 0) ctx.translate((Math.random() - .5) * 14 * this.shake * 3, (Math.random() - .5) * 10 * this.shake * 3);
    this.drawArena();
    if (this.scene === 'title') this.drawTitle();
    else if (this.scene === 'select') this.drawSelect();
    else this.drawFight();
  },

  drawArena() {
    const img = images.arena;
    if (img && img.complete && !img.failed && img.width) {
      const s = Math.max(W / img.width, H / img.height) * 1.04;
      ctx.drawImage(img, (W - img.width * s) / 2, H - img.height * s + 8, img.width * s, img.height * s);
    } else {
      const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#0b0f33'); g.addColorStop(1, '#1a1030');
      ctx.fillStyle = g; ctx.fillRect(-20, -20, W + 40, H + 40);
      ctx.fillStyle = '#15162a'; ctx.fillRect(-20, FLOOR - 40, W + 40, H);
    }
  },

  text(str, x, y, size, color = '#fff', align = 'center', outline = '#000') {
    ctx.font = `${size}px ${FONT}`; ctx.textAlign = align; ctx.textBaseline = 'middle';
    ctx.lineWidth = Math.max(3, size / 4); ctx.strokeStyle = outline; ctx.lineJoin = 'round';
    ctx.strokeText(str, x, y); ctx.fillStyle = color; ctx.fillText(str, x, y);
  },

  portrait(i, x, y, size, flip) {
    const c = ROSTER[i], img = images[`${c.id}/portrait`];
    ctx.fillStyle = '#5a0d0d'; ctx.fillRect(x, y, size, size);
    if (img && img.complete && !img.failed && img.width) {
      ctx.save();
      if (flip) { ctx.translate(x + size, y); ctx.scale(-1, 1); ctx.drawImage(img, 0, 0, size, size); }
      else ctx.drawImage(img, x, y, size, size);
      ctx.restore();
    }
    ctx.lineWidth = 4; ctx.strokeStyle = '#c9c9d6'; ctx.strokeRect(x, y, size, size);
    ctx.lineWidth = 2; ctx.strokeStyle = '#33333f'; ctx.strokeRect(x - 3, y - 3, size + 6, size + 6);
  },

  drawTitle() {
    ctx.fillStyle = 'rgba(4,5,18,.62)'; ctx.fillRect(-20, -20, W + 40, H + 40);
    this.portrait(0, 120, 190, 150, false); this.portrait(1, W - 270, 190, 150, true);
    this.text('J9', W / 2, 110, 84, '#ffd24a', 'center', '#7a1010');
    this.text('AFTER HOURS', W / 2, 180, 30, '#fff');
    const items = ['1 PLAYER  VS  CPU', '2 PLAYERS'];
    items.forEach((s, i) => {
      const on = this.menu === i;
      this.text((on ? '> ' : '  ') + s + (on ? ' <' : '  '), W / 2, 270 + i * 44, 16, on ? '#ffd24a' : '#9aa0c0');
    });
    if (Math.floor(this.time * 2) % 2) this.text('PRESS ENTER', W / 2, 380, 14, '#fff');
    this.text('P1  A/D MOVE  W JUMP  S BLOCK  F PUNCH  G KICK  H SPECIAL', W / 2, 452, 9, '#b9c0e8');
    this.text('P2  ARROWS MOVE/JUMP/BLOCK  , PUNCH  . KICK  / SPECIAL', W / 2, 474, 9, '#b9c0e8');
    this.text('FILL THE METER BY LANDING HITS, THEN UNLEASH YOUR SPECIAL', W / 2, 504, 8, '#8088b0');
  },

  drawSelect() {
    ctx.fillStyle = 'rgba(4,5,18,.7)'; ctx.fillRect(-20, -20, W + 40, H + 40);
    this.text('CHOOSE YOUR FIGHTER', W / 2, 70, 24, '#ffd24a', 'center', '#7a1010');
    const size = 190, gap = 80, x0 = W / 2 - (ROSTER.length * size + (ROSTER.length - 1) * gap) / 2;
    ROSTER.forEach((c, i) => {
      const x = x0 + i * (size + gap), y = 140;
      this.portrait(i, x, y, size, false);
      this.text(c.name, x + size / 2, y + size + 30, 14, '#fff');
      this.text(c.special, x + size / 2, y + size + 56, 8, c.color);
      [0, 1].forEach(p => {
        if (this.pick[p] !== i || (p === 1 && this.mode === 'cpu' && !this.picked[1])) return;
        const col = p === 0 ? '#ff4a3d' : '#4aa8ff', blink = this.picked[p] || Math.floor(this.time * 6) % 2;
        if (blink) { ctx.lineWidth = 6; ctx.strokeStyle = col; ctx.strokeRect(x - 10 - p * 6, y - 10 - p * 6, size + 20 + p * 12, size + 20 + p * 12); }
        this.text(p === 0 ? 'P1' : (this.mode === 'cpu' ? 'CPU' : 'P2'), x + (p === 0 ? 24 : size - 24), y - 26, 12, col);
      });
    });
    const hint = this.mode === 'pvp' ? 'P1: A/D + F    P2: ARROWS + ,    ENTER: START' : 'A/D OR ARROWS TO CHOOSE, F OR ENTER TO CONFIRM';
    this.text(hint, W / 2, 470, 10, '#b9c0e8');
    this.text('ESC: BACK', W / 2, 500, 8, '#8088b0');
  },

  drawFight() {
    const [a, b] = this.f;
    // the fighter who is attacking draws on top
    const order = (b.busy && !a.busy) || a.state === 'down' ? [a, b] : [b, a];
    order.forEach(f => f.draw());
    ctx.filter = 'none';
    for (const s of this.sparks) { ctx.fillStyle = s.color; ctx.fillRect(Math.round(s.x) - 3, Math.round(s.y) - 3, 6, 6); }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // HUD
    const bw = 330, bh = 22, by = 34;
    [a, b].forEach((f, i) => {
      const x = i === 0 ? 90 : W - 90 - bw;
      ctx.fillStyle = '#000'; ctx.fillRect(x - 4, by - 4, bw + 8, bh + 8);
      ctx.fillStyle = '#6b0f0f'; ctx.fillRect(x, by, bw, bh);
      const lag = bw * f.shownHp / MAX_HP, cur = bw * f.hp / MAX_HP;
      ctx.fillStyle = '#fff'; ctx.fillRect(i === 0 ? x + bw - lag : x, by, lag, bh);
      ctx.fillStyle = f.hp > 30 ? '#f4c21f' : '#ff5a2a'; ctx.fillRect(i === 0 ? x + bw - cur : x, by, cur, bh);
      ctx.fillStyle = 'rgba(255,255,255,.35)'; ctx.fillRect(i === 0 ? x + bw - cur : x, by, cur, 5);
      this.portrait(ROSTER.indexOf(f.char), i === 0 ? 18 : W - 18 - 62, 14, 62, i === 1);
      this.text(f.char.name + (f.cpu ? ' (CPU)' : ''), i === 0 ? x : x + bw, by + bh + 16, 10, '#fff', i === 0 ? 'left' : 'right');
      // special meter
      const mw = 180, mx = i === 0 ? x : x + bw - mw, my = H - 30, full = f.meter >= 100;
      ctx.fillStyle = '#000'; ctx.fillRect(mx - 3, my - 3, mw + 6, 14);
      ctx.fillStyle = '#1b2148'; ctx.fillRect(mx, my, mw, 8);
      ctx.fillStyle = full ? (Math.floor(this.time * 8) % 2 ? '#fff' : '#4ae0ff') : '#3a7bd8';
      const m = mw * f.meter / 100; ctx.fillRect(i === 0 ? mx : mx + mw - m, my, m, 8);
      this.text(full ? 'SPECIAL READY' : 'SPECIAL', i === 0 ? mx : mx + mw, my - 12, 8, full ? '#4ae0ff' : '#8088b0', i === 0 ? 'left' : 'right');
      // round pips
      for (let k = 0; k < ROUNDS_TO_WIN; k++) {
        const px = i === 0 ? x + bw - 12 - k * 22 : x + 12 + k * 22;
        ctx.fillStyle = '#000'; ctx.beginPath(); ctx.arc(px, by + bh + 16, 8, 0, 7); ctx.fill();
        ctx.fillStyle = k < f.wins ? '#ffd24a' : '#3a3a4a'; ctx.beginPath(); ctx.arc(px, by + bh + 16, 5, 0, 7); ctx.fill();
      }
    });
    this.text(String(Math.ceil(this.timer)).padStart(2, '0'), W / 2, by + 12, 28, this.timer < 10 ? '#ff5a2a' : '#fff');

    if (this.bannerMsg) {
      const k = this.bannerMsg.t / this.bannerMsg.dur;
      ctx.globalAlpha = Math.min(1, k * 3); this.text(this.bannerMsg.text, W / 2, 150, 20, this.bannerMsg.color); ctx.globalAlpha = 1;
    }
    if (this.phase === 'intro') {
      if (this.phaseT < 1.3) this.text('ROUND ' + this.round, W / 2, 230, 44, '#ffd24a', 'center', '#7a1010');
      else this.text('FIGHT!', W / 2, 230, 64, '#ff4a3d', 'center', '#000');
    } else if (this.phase === 'ko') {
      if (this.phaseT < 1.4) this.text(this.koText, W / 2, 230, 72, '#ff4a3d', 'center', '#000');
      else this.text(this.winner ? this.winner.char.name + ' WINS' : 'DRAW', W / 2, 230, 30, '#ffd24a', 'center', '#7a1010');
    } else if (this.phase === 'over') {
      ctx.fillStyle = 'rgba(4,5,18,.5)'; ctx.fillRect(0, 0, W, H);
      this.text(this.winner.char.name, W / 2, 200, 40, '#ffd24a', 'center', '#7a1010');
      this.text('WINS THE MATCH', W / 2, 256, 22, '#fff');
      if (Math.floor(this.time * 2) % 2) this.text('PRESS ENTER', W / 2, 330, 14, '#fff');
    }
  },
};

// ---------------------------------------------------------------- loop
let last = performance.now();
function frame(now) {
  const dt = Math.min(.033, (now - last) / 1000); last = now;
  game.update(dt); game.draw(); pressed.clear();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
window.__game = game; // handy for debugging in the console
})();
