const TAU = Math.PI * 2;
const palette = {light: '#eee5ce', gold: '#d6bc77', panel: '#5b6251', edge: '#b8b19f', dark: '#191b1a'};
const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
const fade = (age, life) => Math.min(1, age / .8, (life - age) / .8);

function pointOnOrbit(angle, orbit, rx = .6, ry = .39) {
  const x = Math.cos(angle) * orbit.width * rx;
  const y = Math.sin(angle) * orbit.height * ry;
  const tilt = -.37;
  return {x: orbit.x + x * Math.cos(tilt) - y * Math.sin(tilt),
    y: orbit.y + x * Math.sin(tilt) + y * Math.cos(tilt), front: y > 0};
}

function circle(ctx, x, y, radius, fill) {
  ctx.fillStyle = fill;
  ctx.beginPath(); ctx.arc(x, y, radius, 0, TAU); ctx.fill();
}

function line(ctx, points, color, width = 1) {
  ctx.strokeStyle = color; ctx.lineWidth = width; ctx.beginPath();
  points.forEach(([x, y], index) => index ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
  ctx.stroke();
}

function solarPanel(ctx, x) {
  ctx.fillStyle = palette.panel;
  ctx.fillRect(x, -9, 19, 18);
  ctx.strokeStyle = palette.edge; ctx.lineWidth = .7;
  ctx.strokeRect(x, -9, 19, 18);
  for (let i = 1; i < 4; i++) line(ctx, [[x + i * 4.75, -9], [x + i * 4.75, 9]], '#92977a', .5);
  line(ctx, [[x, 0], [x + 19, 0]], '#92977a', .5);
}

function satellite(ctx, scale, angle, telescope) {
  ctx.scale(scale, scale); ctx.rotate(angle);
  line(ctx, [[-34, 0], [34, 0]], palette.edge, 2);
  solarPanel(ctx, -36); solarPanel(ctx, 17);
  ctx.fillStyle = palette.gold;
  ctx.fillRect(-6, -9, 12, 18);
  ctx.fillStyle = palette.light;
  ctx.fillRect(-5, -9, 7, 18);
  ctx.fillStyle = '#8b8267'; ctx.fillRect(2, -6, 4, 12);
  ctx.strokeStyle = palette.dark; ctx.lineWidth = .8; ctx.strokeRect(-6, -9, 12, 18);
  if (telescope) {
    ctx.fillStyle = '#b5ae99'; ctx.fillRect(-4, -19, 8, 12);
    circle(ctx, 0, -19, 4, palette.dark);
    circle(ctx, -1, -20, 1.5, palette.gold);
  } else {
    line(ctx, [[0, -9], [0, -18], [6, -21]], palette.edge);
    circle(ctx, 6, -21, 2, palette.light);
    ctx.fillStyle = palette.light;
    ctx.beginPath(); ctx.ellipse(-2, 15, 8, 3.5, -.35, 0, Math.PI); ctx.fill();
    line(ctx, [[-2, 9], [-2, 16]], palette.gold);
  }
  circle(ctx, 1, 3, 1.3, '#dbc17e');
}

function planet(ctx, radius, moon = false, terracotta = false) {
  const gradient = ctx.createLinearGradient(-radius, -radius, radius, radius);
  const colors = terracotta ? ['#e3ac78', '#b56847', '#593b30']
    : moon ? ['#f1d6a0', '#bd9361', '#65503b'] : ['#eed49b', '#c49c5b', '#685039'];
  colors.forEach((color, index) => gradient.addColorStop(index / 2, color));
  circle(ctx, 0, 0, radius, gradient);
  ctx.save(); ctx.beginPath(); ctx.arc(0, 0, radius, 0, TAU); ctx.clip();
  for (const [x, y, r] of [[-.28, -.35, .21], [.37, .2, .17], [-.31, .38, .12], [.19, -.55, .1]]) {
    circle(ctx, x * radius, y * radius, radius * r, 'rgba(83,48,29,.24)');
    ctx.strokeStyle = 'rgba(255,225,176,.22)'; ctx.lineWidth = .7;
    ctx.beginPath(); ctx.arc(x * radius, y * radius, radius * r, Math.PI, TAU); ctx.stroke();
  }
  ctx.restore();
  ctx.strokeStyle = 'rgba(238,229,206,.21)'; ctx.lineWidth = .8;
  ctx.beginPath(); ctx.arc(0, 0, radius, 2.8, 4.9); ctx.stroke();
}

function asteroid(ctx, age, scale) {
  ctx.rotate(age * .11); ctx.scale(scale, scale);
  const vertices = [[-11, -4], [-6, -11], [3, -12], [10, -5], [9, 5], [3, 11], [-7, 9], [-12, 2]];
  ctx.fillStyle = '#676956'; ctx.strokeStyle = '#a49c7c'; ctx.lineWidth = .7;
  ctx.beginPath(); vertices.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
  ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#9d9271'; ctx.beginPath(); ctx.moveTo(-11, -4); ctx.lineTo(-6, -11);
  ctx.lineTo(3, -12); ctx.lineTo(0, -2); ctx.closePath(); ctx.fill();
  circle(ctx, 4, 3, 3.2, '#343c31'); circle(ctx, -5, 4, 1.8, '#404637');
}

function streak(ctx, x, y, angle, length, opacity, comet, age) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(angle); ctx.globalAlpha = opacity;
  const tail = ctx.createLinearGradient(-length, 0, 4, 0);
  tail.addColorStop(0, 'rgba(214,188,119,0)');
  tail.addColorStop(.65, 'rgba(214,188,119,.22)');
  tail.addColorStop(1, palette.light);
  ctx.fillStyle = tail; ctx.beginPath();
  ctx.moveTo(-length, 0); ctx.quadraticCurveTo(-length * .4, -5, 0, comet ? -3 : -1);
  ctx.quadraticCurveTo(6, 0, 0, comet ? 3 : 1); ctx.closePath(); ctx.fill();
  if (comet) {
    line(ctx, [[-length * .9, -10], [-length * .3, -5], [0, 0]], 'rgba(214,188,119,.18)', 2);
    for (let i = 0; i < 9; i++) {
      const distance = ((age * 90 + i * 23) % length);
      const alpha = (1 - distance / length) * .4;
      circle(ctx, -distance, Math.sin(i * 2.7 + age) * (2 + distance * .025), .65,
        `rgba(233,216,163,${alpha})`);
    }
  }
  const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, comet ? 15 : 6);
  glow.addColorStop(0, 'rgba(255,242,204,.75)'); glow.addColorStop(1, 'rgba(214,188,119,0)');
  circle(ctx, 0, 0, comet ? 15 : 6, glow);
  circle(ctx, 0, 0, comet ? 2.5 : 1, palette.light);
  ctx.restore();
}

export function createSkyScenes(random = Math.random) {
  const events = [];
  let nextMeteor = 4 + random() * 4;
  let nextComet = 19 + random() * 8;
  let nextAsteroid = 28 + random() * 10;

  function schedule(time, compact) {
    const interval = compact ? 1.5 : 1;
    if (time >= nextMeteor) {
      events.push({kind: 'meteor', start: time, life: 1.1 + random() * .5, seed: random()});
      nextMeteor = time + (10 + random() * 14) * interval;
    }
    if (time >= nextComet) {
      events.push({kind: 'comet', start: time, life: 3.4, seed: random()});
      nextComet = time + (38 + random() * 24) * interval;
    }
    if (time >= nextAsteroid) {
      events.push({kind: 'asteroid', start: time, life: 19, seed: random()});
      nextAsteroid = time + (48 + random() * 22) * interval;
    }
    for (let i = events.length - 1; i >= 0; i--) {
      if (time - events[i].start > events[i].life) events.splice(i, 1);
    }
  }

  function drawWorld(back, front, orbit, time, compact) {
    const position = pointOnOrbit(1.1 + time * .012, orbit, .61, .52);
    const radius = compact ? 13 : 22;
    const surface = position.front ? front : back;
    surface.save(); surface.translate(position.x, position.y); surface.globalAlpha = .9;
    planet(surface, radius);
    const moonAngle = time * .18 + .6;
    surface.translate(Math.cos(moonAngle) * radius * 2.1, Math.sin(moonAngle) * radius * .75);
    planet(surface, radius * .24, true); surface.restore();
    const companion = pointOnOrbit(3.65 - time * .06, orbit, .58, .48);
    const companionSurface = companion.front ? front : back;
    companionSurface.save();
    companionSurface.translate(companion.x, companion.y);
    companionSurface.globalAlpha = .78;
    planet(companionSurface, compact ? 9 : 15, false, true);
    companionSurface.restore();
  }

  function drawMachine(back, front, orbit, time, compact) {
    const cycle = Math.floor(time / 58);
    const age = time % 58 - 2;
    if (age < 0 || age > 29) return;
    const angle = -.8 + age * .17;
    const position = pointOnOrbit(angle, orbit, .53, .38);
    const surface = position.front ? front : back;
    surface.save(); surface.globalAlpha = fade(age, 29) * .8;
    surface.translate(position.x, position.y);
    satellite(surface, compact ? .43 : .64, Math.sin(angle) * .25 - .3, cycle % 2 === 1);
    surface.restore();
  }

  function drawEvent(back, front, event, orbit, width, height, time, compact) {
    const age = time - event.start;
    const progress = clamp(age / event.life, 0, 1);
    if (event.kind === 'asteroid') {
      const position = pointOnOrbit(event.seed * TAU + progress * 1.8, orbit, .66, .5);
      const surface = position.front ? front : back;
      surface.save(); surface.globalAlpha = fade(age, event.life) * .5;
      surface.translate(position.x, position.y); asteroid(surface, age, compact ? .45 : .7);
      surface.restore(); return;
    }
    const comet = event.kind === 'comet';
    const travel = Math.min(orbit.width * 1.05, width * .7);
    const startX = orbit.x + orbit.width * (.52 - event.seed * .25);
    const startY = compact ? orbit.y - orbit.height * .5 : height * (.08 + event.seed * .2);
    const x = startX - travel * progress;
    const y = startY + travel * progress * .48;
    const opacity = Math.sin(progress * Math.PI) * (comet ? .7 : .58);
    streak(back, x, y, Math.PI - .45, (comet ? 170 : 80) * (compact ? .65 : 1), opacity, comet, age);
  }

  return {
    draw({back, front, orbit, width, height, time, still = false}) {
      if (orbit.width < 1) return;
      const compact = width < 650;
      drawWorld(back, front, orbit, still ? 0 : time, compact);
      if (still) return;
      schedule(time, compact);
      drawMachine(back, front, orbit, time, compact);
      events.forEach(event => drawEvent(back, front, event, orbit, width, height, time, compact));
    },
  };
}
