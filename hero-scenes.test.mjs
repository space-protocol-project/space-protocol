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
