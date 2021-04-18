#! /usr/bin/env node

// Implement Array.prototype.every clone

function myEvery(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (!callback(array[i])) return false;
  }

  return true;
}

function odd(number) {
  return number % 2 === 1;
}


console.log(myEvery([1, 2, 3, 4], odd) === false);
console.log(myEvery([1, 3, 5], odd) === true);

console.log(myEvery([1, 2, 3, 4], (element) => element < 5) === true);
console.log(myEvery([1, 2, 3, 4], (element) => element > 2) === false);
