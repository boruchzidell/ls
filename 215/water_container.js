#! /usr/bin/env node

// https://leetcode.com/submissions/detail/513091901/

function containers(array) {
  let max = 0;
  for (let first = 0; first <= array.length - 2; first += 1) {
    for (let end = first + 1; end <= array.length -1 ; end += 1) {
      let x = end - first;
      let y = Math.min(array[first], array[end]);
      let volume = y * x;

      if (volume > max) max = volume;
    }
  }

  return max;
}

// let height = [4,3,2,1,4];
let heightA = [1,8,6,2,5,4,8,3,7];
console.log(containers(heightA) === 49);

let heightB = [1, 1];
console.log(containers(heightB) === 1);

let heightC = [4, 3, 2, 1, 4];
console.log(containers(heightC) === 16);

let heightD = [1, 2, 1];
console.log(containers(heightD) === 2);
