(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return;
  canvas.className = 'hero-particles';
  canvas.setAttribute('aria-hidden', 'true');
  hero.prepend(canvas);

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = {x: 0, y: 0, active: false};
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  let width = 0;
  let height = 0;
  let particles = [];
  let visible = false;
  let frame = 0;
  let previous = 0;
  let time = 0;

  function resize() {
    width = hero.clientWidth;
    height = hero.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = width < 650 ? 20 : 48;
    particles = Array.from({length: count}, () => ({
      x: Math.random(), y: Math.random(), phase: Math.random() * Math.PI * 2,
      speed: 2 + Math.random() * 5, radius: .7 + Math.random() * 1.2,
    }));
  }

  function drawParticle(particle) {
    const x = particle.x * width + Math.sin(time * .25 + particle.phase) * 18;
    const y = ((particle.y * height - time * particle.speed) % height + height) % height;
    const dx = x - pointer.x;
    const dy = y - pointer.y;
    const distance = Math.hypot(dx, dy);
    const near = pointer.active ? Math.max(0, 1 - distance / 150) : 0;
    const push = near * 24 / Math.max(distance, 1);
    context.fillStyle = `rgba(233,216,163,${.13 + near * .55})`;
    context.beginPath();
    context.arc(x + dx * push, y + dy * push, particle.radius + near, 0, Math.PI * 2);
    context.fill();
    if (near <= 0) return;
    context.strokeStyle = `rgba(233,216,163,${near * .13})`;
    context.beginPath();
    context.moveTo(x + dx * push, y + dy * push);
    context.lineTo(pointer.x, pointer.y);
    context.stroke();
  }

  function drawGlow() {
    if (!pointer.active) return;
    const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 230);
    glow.addColorStop(0, 'rgba(214,188,119,.065)');
    glow.addColorStop(1, 'rgba(214,188,119,0)');
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);
  }

  function animate(now) {
    frame = requestAnimationFrame(animate);
    if (now - previous < 1000 / 30) return;
    time += Math.min((now - previous) / 1000, .1);
    previous = now;
    context.clearRect(0, 0, width, height);
    drawGlow();
    particles.forEach(drawParticle);
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
    if (!visible || document.hidden || reduced.matches) return;
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
