#! /usr/bin/env node
/*
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7

input - array

output - number

rules
  - each element is exactly x away from each other, except for one
  - will never be the endpoints

test cases / crux
  - negative numbers
  - 0
  - decimals


algo / shape
  - get the difference between 1 / 2 and 2 / 3
  - get the min difference
  - iterate the array
    - if next element is more than current element + difference -> return current element + difference
*/

function findMissing(array) {
  if (array.length < 3) return 'invalid input';

  let minDiff = Math.min(Math.abs(array[1] - array[0]), Math.abs(array[2] - array[1]));

  if (array[1] - array[0] < 0) minDiff = -minDiff;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i + 1] !== array[i] + minDiff) return array[i] + minDiff;
  }
}


// happy path
console.log(findMissing([1, 3, 5, 9, 11]) === 7);

// second element is the missing
console.log(findMissing([1, 5, 7]) === 3);

console.log(findMissing([1, 5, 13]) === 9);

// negatives
console.log(findMissing([-3, - 1, 1, 3, 5, 9, 11]) === 7);

// less than 3 elements
console.log(findMissing([9, 11]) === 'invalid input');

// reverse
console.log(findMissing([5, 4, 2])  === 3);
