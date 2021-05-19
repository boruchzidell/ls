#! /usr/bin/env node

function maxRotation(integer) {
  let currentInt = integer;

  for (let i = String(currentInt).length; i >= 2; i -= 1) {
    currentInt = rotateRightmostDigits(currentInt, i)
  }

  return currentInt;
}

function rotateRightmostDigits(number, rightDigit) {
  let stringInts = [...number.toString()];
  let rightSide = stringInts.splice(-rightDigit);

  return Number(stringInts.concat(rotateArray(rightSide)).join(''));
}

function rotateArray(array) {
  if (!isValidInput(array)) return;

  let arrayCopy = [...array];
  let leading = arrayCopy.splice(0, 1);
  return arrayCopy.concat(leading);
}

function isValidInput(input) {
  if (!input || !Array.isArray(input)) return false;
  return true
}

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);
