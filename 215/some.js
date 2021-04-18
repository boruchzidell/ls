#! /usr/bin/env node

// Implement Array.prototype.some clone

function mySome(array, callback) {

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) return true;
  }

  return false;
}

function odd(number) {
  return number % 2 === 1;
}

console.log(mySome([1, 2, 3, 4], odd) === true);
console.log(mySome([2, 4, 6], odd) === false);

console.log(mySome([1, 2, 3, 4], (element) => element > 5) === false);
console.log(mySome([1, 2, 3, 4], (element) => element > 2) === true);
