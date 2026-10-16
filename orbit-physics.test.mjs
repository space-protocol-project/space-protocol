import {test} from 'node:test';
import assert from 'node:assert/strict';
import {moveOrbit} from './orbit-physics.mjs';

test('частицы закручиваются, остаются ограниченными и возвращаются на орбиту', () => {
  const particle = {x: 0, y: 0, vx: 0, vy: 0};
  const target = {x: 70, y: 0};
  const pointer = {x: 0, y: 0, active: true};
  for (let i = 0; i < 900; i++) {
    moveOrbit(particle, target, pointer, 2);
    assert.ok(Number.isFinite(particle.x + particle.y));
    assert.ok(Math.hypot(particle.vx, particle.vy) <= 7.001);
    assert.ok(Math.hypot(particle.x, particle.y) < 400);
    if (i === 10) assert.ok(particle.y > 10);
  }
  pointer.active = false;
  for (let i = 0; i < 300; i++) moveOrbit(particle, target, pointer, 2);
  assert.ok(Math.hypot(particle.x, particle.y) < .01);
});

test('большой шаг разбивается на устойчивые подшаги', () => {
  const a = {x: 0, y: 0, vx: 0, vy: 0};
  const b = {...a};
  const target = {x: 80, y: 30};
  const pointer = {x: 0, y: 0, active: true};
  moveOrbit(a, target, pointer, 3);
  for (let i = 0; i < 3; i++) moveOrbit(b, target, pointer, 1);
  assert.deepEqual(a, b);
});
