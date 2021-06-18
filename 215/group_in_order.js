#! /usr/bin/env node
/*
Create a function that groups an array of numbers based on a size parameter. The size represents the maximum length of each sub-array.

[1, 2, 3, 4, 5, 6], 3
[[1, 3, 5], [2, 4, 6]]
// Divide array into groups of size 3.

[1, 2, 3, 4, 5, 6], 2
[[1, 4], [2, 5], [3, 6]]
// Divide array into groups of size 2.

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4
[[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]]
// "Leftover" arrays are okay.

e size parameter represents the maximum size for each sub-array (see ex.4). You should try to fill each sub-array evenly. In other words, ex.4 should be [[1, 3, 5], [2, 4, 6]], not [[1, 3, 5, 6], [2, 4]].
Keep the relative order of the numbers in each sub-array the same as the order in the original array.

input - array and maxSize of subarrays
output - nested array, each subarray length <= maxSize

rules
  - given an array and max size, distribute the elements into subarrays, each subarray size being <= max size
  - distrbute the elements into the subarrays iteratively
    - first element -> first subarray
    - second element -> second subarray
    - then back to first subarray

  - subarrays may be only partially filled

  - if size is 0 -> 'invalid'
  - if size > than the array -> return array as is
  - return a new array
  - no need to validate input
  -


test cases / crux


algo / shape
  - cope of array
  - numberOfSubarrays = Math.ceil(array.length / size)
  - set result = make array size of above and fill with subarrays

  - while copy has elements
    - iterate over subarrays
      - shift off first element and push onto current subarray

  - return result

*/

function group(array, size) {
  let copy = [...array];

  let numberOfSubarrays = Math.ceil(array.length / size)

  let result = Array.from({ length: numberOfSubarrays }).map(el => []);

  while (copy.length > 0) {
    result.forEach(subarray => {
      if (copy.length > 0)subarray.push(copy.shift());
    });
  }

  return result;

}

// simplest
console.log(group([1, 2, 3, 4], 2));// ➞ [[1, 3], [2, 4]]

console.log(group([1, 2, 3, 4, 5, 6, 7], 4)); // ➞ [[1, 3, 5, 7], [2, 4, 6]]

console.log(group([1, 2, 3, 4, 5], 1));// ➞ [[1], [2], [3], [4], [5]]

console.log(group([1, 2, 3, 4, 5, 6], 4)); // ➞ [[1, 3, 5], [2, 4, 6]]

console.log(group([1, 2, 3, 4, 5, 6], 7));


// error case
// defaults
