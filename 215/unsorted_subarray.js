#! /usr/bin/env node
/* eslint-disable*/
/*

https://edabit.com/challenge/fqf6DETHoWwJTFrb2

Given an integer array, you need to find the shortest continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

Create a function that returns the length of that subarray.

Examples


The given array can contain duplicates, so ascending order here means <= (see example #3).
If the given array is already sorted or is empty, return 0.

*/
function findUnsortedSubarray(array) {
  let sorted = [...array].sort((a, b) => a - b);
  let beginningIndex = 0;
  let endingIndex = 0;

  for (let index in sorted) {
    if (sorted[index] !== array[index]) {
      beginningIndex = index;
      break;
    }
  }

  for (let i = sorted.length - 1; i >= 0; i -= 1) {
    if (sorted[i] !== array[i]) {
      endingIndex = i;
      break;
    }
  }

  if (beginningIndex === 0 && endingIndex === 0) return 0;
  return array.slice(beginningIndex, endingIndex + 1).length;
}

console.log(findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]) === 5);
// You need to sort [3, 2, 5, 8, 7] in ascending order to make
// the whole array sorted in ascending order.

console.log(findUnsortedSubarray([10, 7, 5, 3]) === 4);

console.log(findUnsortedSubarray([2, 4, 4, 4, 4, 3]) === 5);

// already sorted -> 0
console.log(findUnsortedSubarray([2, 3, 4]) === 0);

// empty -> 0
console.log(findUnsortedSubarray([]) === 0);

// negative numbers
console.log(findUnsortedSubarray([-2, -3, -4]) === 3);

// decimal numbers
console.log(findUnsortedSubarray([ 4, 2.5, 3.5]) === 3);
