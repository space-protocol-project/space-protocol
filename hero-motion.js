import {moveOrbit} from './orbit-physics.mjs?v=20261016-vortex';

(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return;
  canvas.className = 'hero-particles';
  canvas.setAttribute('aria-hidden', 'true');
  const backCanvas = canvas.cloneNode();
  const back = backCanvas.getContext('2d');
  if (!back) return;
  backCanvas.className = 'hero-particles hero-particles-back';
  hero.prepend(backCanvas, canvas);

  const art = hero.querySelector('.hero-art');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = {x: 0, y: 0, active: false};
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  let width = 0;
  let height = 0;
  let particles = [];
  let orbits = [];
  let orbit = {x: 0, y: 0, width: 0, height: 0};
  let visible = false;
  let frame = 0;
  let previous = 0;
  let time = 0;

  function resize() {
    width = hero.clientWidth;
    height = hero.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    for (const surface of [canvas, backCanvas]) {
      surface.width = Math.round(width * ratio);
      surface.height = Math.round(height * ratio);
      surface.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    const count = width < 650 ? 45 : 110;
    particles = Array.from({length: count}, () => ({
      x: Math.random(), y: Math.random(), phase: Math.random() * Math.PI * 2,
      speed: 2 + Math.random() * 5, radius: .7 + Math.random() * 1.2,
    }));
    const bounds = art.getBoundingClientRect();
    const parent = hero.getBoundingClientRect();
    orbit = {x: bounds.left - parent.left + bounds.width / 2,
      y: bounds.top - parent.top + bounds.height / 2,
      width: bounds.width, height: Math.min(bounds.width, bounds.height)};
    const orbitCount = width < 650 ? 280 : 680;
    orbits = Array.from({length: orbitCount}, (_, index) => ({
      ring: index % 2, phase: Math.random() * Math.PI * 2,
      band: (Math.random() - .5) * 9,
      radius: .45 + Math.random() * .85, alpha: .18 + Math.random() * .5,
      x: 0, y: 0, vx: 0, vy: 0,
    }));
    if (reduced.matches && visible) render(0);
  }

  function drawParticle(particle) {
    const x = particle.x * width + Math.sin(time * .25 + particle.phase) * 18;
    const y = ((particle.y * height - time * particle.speed) % height + height) % height;
    const dx = x - pointer.x;
    const dy = y - pointer.y;
    const distance = Math.hypot(dx, dy);
    const near = pointer.active ? Math.max(0, 1 - distance / 150) : 0;
    const push = near * 24 / Math.max(distance, 1);
    back.fillStyle = `rgba(233,216,163,${.13 + near * .55})`;
    back.beginPath();
    back.arc(x + dx * push, y + dy * push, particle.radius + near, 0, Math.PI * 2);
    back.fill();
    if (near <= 0) return;
    back.strokeStyle = `rgba(233,216,163,${near * .13})`;
    back.beginPath();
    back.moveTo(x + dx * push, y + dy * push);
    back.lineTo(pointer.x, pointer.y);
    back.stroke();
  }

  function drawGlow() {
    if (!pointer.active) return;
    const glow = back.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 230);
    glow.addColorStop(0, 'rgba(214,188,119,.065)');
    glow.addColorStop(1, 'rgba(214,188,119,0)');
    back.fillStyle = glow;
    back.fillRect(0, 0, width, height);
  }

  function orbitTarget(particle) {
    const angle = particle.phase + time * (particle.ring ? -.035 : .025);
    const radiusX = orbit.width * .49 + particle.band;
    const radiusY = orbit.height * (particle.ring ? .28 : .49) + particle.band;
    const x = Math.cos(angle) * radiusX;
    const y = Math.sin(angle) * radiusY;
    const tilt = particle.ring ? -.42 : -.16;
    return {x: orbit.x + x * Math.cos(tilt) - y * Math.sin(tilt),
      y: orbit.y + x * Math.sin(tilt) + y * Math.cos(tilt), front: y >= 0};
  }

  function drawOrbit(particle, step) {
    const target = orbitTarget(particle);
    const previousX = target.x + particle.x;
    const previousY = target.y + particle.y;
    moveOrbit(particle, target, pointer, step);
    const energy = Math.min(Math.hypot(particle.vx, particle.vy) / 5, 1);
    const surface = target.front ? context : back;
    if (energy > .15) {
      surface.strokeStyle = `rgba(233,216,163,${energy * .3})`;
      surface.lineWidth = particle.radius;
      surface.beginPath();
      surface.moveTo(previousX - particle.vx * 2, previousY - particle.vy * 2);
      surface.lineTo(target.x + particle.x, target.y + particle.y);
      surface.stroke();
    }
    surface.fillStyle = `rgba(233,216,163,${particle.alpha + energy * .25})`;
    surface.beginPath();
    surface.arc(target.x + particle.x, target.y + particle.y,
      particle.radius + energy * .45, 0, Math.PI * 2);
    surface.fill();
  }

  function render(step) {
    context.clearRect(0, 0, width, height);
    back.clearRect(0, 0, width, height);
    drawGlow();
    particles.forEach(drawParticle);
    orbits.forEach(particle => drawOrbit(particle, step));
  }

  function animate(now) {
    frame = requestAnimationFrame(animate);
    if (now - previous < 1000 / 30) return;
    const delta = Math.min((now - previous) / 1000, .05);
    time += delta;
    previous = now;
    render(delta * 60);
  }

  function resetPointer() {
    pointer.active = false;
    hero.style.setProperty('--orbit-x', '0px');
    hero.style.setProperty('--orbit-y', '0px');
  }

  function sync() {
    cancelAnimationFrame(frame);
    frame = 0;
    resetPointer();
    context.clearRect(0, 0, width, height);
    back.clearRect(0, 0, width, height);
    if (!visible || document.hidden) return;
    if (reduced.matches) {
      render(0);
      return;
    }
    previous = performance.now();
    frame = requestAnimationFrame(animate);
  }

  hero.addEventListener('pointermove', event => {
    if (reduced.matches || !finePointer.matches) return;
    const bounds = hero.getBoundingClientRect();
    pointer.x = event.clientX - bounds.left;
    pointer.y = event.clientY - bounds.top;
    pointer.active = true;
    hero.style.setProperty('--orbit-x', `${(pointer.x / width - .5) * 22}px`);
    hero.style.setProperty('--orbit-y', `${(pointer.y / height - .5) * 16}px`);
  }, {passive: true});
  hero.addEventListener('pointerleave', resetPointer);
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', sync);
  finePointer.addEventListener('change', resetPointer);
  new ResizeObserver(resize).observe(hero);
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    sync();
  }).observe(hero);
  resize();
})();
