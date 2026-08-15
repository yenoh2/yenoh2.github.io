/*
 * Road geometry for Carina's Chompy Game.
 *
 * A closed Catmull-Rom spline through hand-placed control points, resampled
 * to uniform arc length so the Runner can travel at constant speed and any
 * position on the road can be looked up by distance `s` in O(1).
 */
const ChompyPath = (() => {
  function catmullRom(p0, p1, p2, p3, t) {
    const t2 = t * t;
    const t3 = t2 * t;
    return {
      x:
        0.5 *
        (2 * p1.x +
          (-p0.x + p2.x) * t +
          (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
          (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
      y:
        0.5 *
        (2 * p1.y +
          (-p0.y + p2.y) * t +
          (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
          (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
    };
  }

  function build(points, spacing = 2) {
    // Dense parametric sampling of the closed spline.
    const raw = [];
    const n = points.length;
    const perSeg = 48;
    for (let i = 0; i < n; i++) {
      const p0 = points[(i - 1 + n) % n];
      const p1 = points[i];
      const p2 = points[(i + 1) % n];
      const p3 = points[(i + 2) % n];
      for (let j = 0; j < perSeg; j++) {
        raw.push(catmullRom(p0, p1, p2, p3, j / perSeg));
      }
    }

    // Cumulative length around the loop (including the closing segment).
    const cum = new Array(raw.length + 1);
    cum[0] = 0;
    for (let i = 1; i <= raw.length; i++) {
      const a = raw[i - 1];
      const b = raw[i % raw.length];
      cum[i] = cum[i - 1] + Math.hypot(b.x - a.x, b.y - a.y);
    }
    const total = cum[raw.length];

    // Resample at uniform arc-length spacing.
    const count = Math.floor(total / spacing);
    const samples = new Array(count);
    let seg = 0;
    for (let k = 0; k < count; k++) {
      const target = k * spacing;
      while (seg < raw.length - 1 && cum[seg + 1] < target) seg++;
      const a = raw[seg];
      const b = raw[(seg + 1) % raw.length];
      const segLen = cum[seg + 1] - cum[seg] || 1;
      const f = (target - cum[seg]) / segLen;
      samples[k] = {
        x: a.x + (b.x - a.x) * f,
        y: a.y + (b.y - a.y) * f,
      };
    }

    // Tangents/normals from neighboring samples.
    for (let k = 0; k < count; k++) {
      const prev = samples[(k - 1 + count) % count];
      const next = samples[(k + 1) % count];
      let tx = next.x - prev.x;
      let ty = next.y - prev.y;
      const len = Math.hypot(tx, ty) || 1;
      tx /= len;
      ty /= len;
      samples[k].tx = tx;
      samples[k].ty = ty;
      samples[k].nx = -ty; // normal = tangent rotated 90° CCW
      samples[k].ny = tx;
    }

    const length = count * spacing;

    function at(s) {
      s = ((s % length) + length) % length;
      const f = s / spacing;
      const i0 = Math.floor(f) % count;
      const i1 = (i0 + 1) % count;
      const t = f - Math.floor(f);
      const a = samples[i0];
      const b = samples[i1];
      let tx = a.tx + (b.tx - a.tx) * t;
      let ty = a.ty + (b.ty - a.ty) * t;
      const tl = Math.hypot(tx, ty) || 1;
      tx /= tl;
      ty /= tl;
      return {
        x: a.x + (b.x - a.x) * t,
        y: a.y + (b.y - a.y) * t,
        tx,
        ty,
        nx: -ty,
        ny: tx,
      };
    }

    function nearestS(x, y) {
      let best = 0;
      let bestD = Infinity;
      for (let k = 0; k < count; k++) {
        const d = (samples[k].x - x) ** 2 + (samples[k].y - y) ** 2;
        if (d < bestD) {
          bestD = d;
          best = k;
        }
      }
      return best * spacing;
    }

    return { samples, spacing, length, at, nearestS };
  }

  return { build };
})();
