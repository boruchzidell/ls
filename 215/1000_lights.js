#! /usr/bin/env node

function lightsOn(switches) {
  let lights = Array.from({ length: switches }, () => false);

  for (let pattern = 1; pattern <= switches; pattern += 1) {
    for (let idx = 0; idx < lights.length; idx += 1) {
      if ((idx + 1) % pattern === 0) {
        lights[idx] = !lights[idx];
      }
    }
  }

  return lights.map((element, idx) => element ? idx + 1 : element).filter((element) => element);
}

const p = (input) => console.log(input);

p(lightsOn(5));        // [1, 4]
p(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
