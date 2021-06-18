#! /usr/bin/env node

/*

Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

Examples

Notes
You must mutate the original array.
Keep the relative order of the non-zero elements the same.

input - array of number
output - the array mutated so all zeros are at end

rules
  - given an array of number, move all the zeros to the end of array, in place
  - keep all other elements in their relative order

test cases / crux
  -

algo
  - iterate backwards (for loop)
  - if element === 0,
    - splice and push
*/

// happy path
// edge cases
// error

function zeroesToEnd(array) {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] === 0) {
      array.push(array.splice(i, 1)[0]);
    }
  }

  return array;
}

console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); //➞[1, 2, 4, 5, 0, 0, 0]

console.log(zeroesToEnd([0, 0, 2, 0, 5]));//➞ [2, 5, 0, 0, 0]

console.log(zeroesToEnd([2, 5, 0, 0, 0]));//➞ [2, 5, 0, 0, 0]

console.log(zeroesToEnd([4, 4, 5]));// ➞ [4, 4, 5]

console.log(zeroesToEnd([0, 0]));// ➞ [0, 0]
