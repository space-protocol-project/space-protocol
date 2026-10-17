import test from 'node:test';
import assert from 'node:assert/strict';
import {createSkyScenes} from './hero-scenes.mjs';

function surface() {
  const calls = [];
  return {calls, context: new Proxy({}, {
    get(_, name) {
      return (...args) => {
        for (const value of args) {
          if (typeof value === 'number') assert.ok(Number.isFinite(value), `${String(name)}: ${value}`);
        }
        calls.push([name, ...args]);
        if (String(name).startsWith('create')) return {addColorStop() {}};
      };
    },
  })};
}

test('Космические сцены устойчивы на телефоне, компьютере и после большого перерыва', () => {
  for (const width of [390, 1500]) {
    const sky = createSkyScenes(() => .5);
    const back = surface(), front = surface();
    const orbit = {x: width * .72, y: 400, width: width * .4, height: 480};
    for (const time of [0, 4, 8, 23, 24, 34, 35, 61, 3600, 3601]) {
      back.calls.length = 0; front.calls.length = 0;
      sky.draw({back: back.context, front: front.context, orbit, width, height: 800, time});
      assert.ok(back.calls.length + front.calls.length < 400, 'Объекты не накапливаются после паузы');
    }
  }
});

test('При уменьшенном движении сцена не меняется и не создаёт метеоры', () => {
  const sky = createSkyScenes();
  const draw = time => {
    const back = surface(), front = surface();
    sky.draw({back: back.context, front: front.context,
      orbit: {x: 900, y: 400, width: 500, height: 500},
      width: 1400, height: 800, time, still: true});
    return JSON.stringify([back.calls, front.calls]);
  };
  assert.equal(draw(0), draw(100000));
});

test('Планета реагирует только рядом с курсором и возвращается на орбиту', () => {
  const orbit = {x: 900, y: 400, width: 500, height: 500};
  const baseline = createSkyScenes(() => .5), interactive = createSkyScenes(() => .5);
  const draw = (sky, time, pointer) => {
    const back = surface(), front = surface();
    sky.draw({back: back.context, front: front.context, orbit, width: 1400, height: 800, time, pointer});
    return [...back.calls, ...front.calls].filter(call => call[0] === 'translate');
  };
  const angle = 3.65, tilt = -.37;
  const x = Math.cos(angle) * 500 * .58, y = Math.sin(angle) * 500 * .48;
  const pointer = {active: true, x: 900 + x * Math.cos(tilt) - y * Math.sin(tilt) - 20,
    y: 400 + x * Math.sin(tilt) + y * Math.cos(tilt)};
  const normal = draw(baseline, 0);
  const moved = draw(interactive, 0, pointer);
  const differences = moved.map((call, i) => Math.hypot(call[1] - normal[i][1], call[2] - normal[i][2]));
  assert.ok(differences.some(distance => distance > 1));
  assert.ok(differences.every(distance => distance <= 24));
  assert.ok(moved.some((call, i) => call[2] - normal[i][2] > 1), 'Объект закручивается вместе с точками');
  let actual, expected;
  for (let i = 1; i <= 180; i++) {
    actual = draw(interactive, i / 30, {active: false});
    expected = draw(baseline, i / 30);
  }
  actual.forEach((call, i) => assert.ok(Math.hypot(call[1] - expected[i][1], call[2] - expected[i][2]) < .001));
  assert.deepEqual(draw(createSkyScenes(), 0, {active: true, x: -1000, y: -1000}), normal);
});
