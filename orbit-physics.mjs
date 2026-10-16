export function moveOrbit(particle, target, pointer, step) {
  // Малые шаги сохраняют устойчивость при неравномерной частоте кадров.
  const count = Math.max(1, Math.ceil(step));
  const dt = step / count;
  for (let i = 0; i < count; i++) {
    const dx = target.x + particle.x - pointer.x;
    const dy = (target.y + particle.y - pointer.y) / .72;
    const distance = Math.max(Math.hypot(dx, dy), 1);
    const near = pointer.active ? Math.max(0, 1 - distance / 175) : 0;
    const influence = near * near;
    const radial = (52 - distance) * .035;
    const spring = .022 * (1 - near * .94);
    const damping = Math.pow(.9, dt);
    particle.vx = (particle.vx + ((dx * radial - dy * 2.8) / distance * influence - particle.x * spring) * dt) * damping;
    particle.vy = (particle.vy + ((dy * radial + dx * 2.8) / distance * influence * .72 - particle.y * spring) * dt) * damping;
    const limit = Math.max(1, Math.hypot(particle.vx, particle.vy) / 7);
    particle.vx /= limit;
    particle.vy /= limit;
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
  }
}
