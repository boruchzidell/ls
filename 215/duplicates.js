#! /usr/bin/env node
/* eslint-disable*/
/*
https://www.codewars.com/kata/5e8dd197c122f6001a8637ca/javascript

You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}
Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}
Rules
Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
If duplicate characters are found in the same array, the first occurance should be kept.

Example 1
input = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

output = {
  "1": ["F", "G"],
  "2": ["C"],
  "3": ["A", "B", "D"],
}

Example 2
input = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}

output = {
  "11": ["P", "R", "S"],
  "53": ["C"],
  "236": ["L", "X", "G", "H"],
  "432": ["A", "B", "D"],
}

Input -  object
Output - object with elements in array values appearing once accross the entire object

Rules
  - elements in array values should appear once across entire object
  - when element occurs twice, the key with higher numberical value gets it
  - when element appears twice in a single array, keep the first instance
  - return all the keys, even if the value is empty array
  -

test cases / crux
	- key is non string number -> return 'invalid input'
  - non string elements -> ignore the element
  - non array values -> ignore the property

  - all empty arrays
  - empty object -> {}
  - empty string elments -> keep
  - ignore case sensitivity ('A' === 'a')
  - elements are words (non single letter elements)


Algo / Shape
  - set seen = []
  - get array of keys
  - sort descending order
  - iterate keys array
    - access the object array value for that key
    - reduce array
      - if that element exists in seen -> continue
      - if not -> add element to new array
               -> add element to seen
    - set the object key to the new array

  - return the object

*/

function deduplicate(obj) {
  let seen = [];
  let result = {};

  let keys = Object.keys(obj).sort((a, b) => b - a);

  if (keys.some(key => key !== String(Number(key)))) return 'invalid input';

  keys.forEach(key => {
    let currentArray = obj[key];

    if (!Array.isArray(currentArray)) return;

    result[key] = currentArray.reduce((arr, key) => {
      if (typeof key === 'string' && !seen.includes(key.toLowerCase())) {
        arr.push(key);
        seen.push(key.toLowerCase());
      }
      return arr;
    }, []);
  });

  return result;
}

// Example 1
inputA = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

console.log(deduplicate(inputA));
// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }


// Example 2
inputB = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}
console.log(deduplicate(inputB));
// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }


// Example 3
inputC = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}
console.log(deduplicate(inputC));
// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }


// non letter chars
inputD = {
  "432": ["/", "/", "B", "D"],
  "53": ["L", "/", "/", "C"],
}
console.log(deduplicate(inputD));
// {
  // "53": ["L", "C"],
  // "432": ["/", "B", "D"],
// }


inputE = {
  "432": ["/", "/", "B", "D"],
  "53": ["L", "/", false, null, undefined, 1, {}, []],
}
console.log(deduplicate(inputE));
// {
//  "53": ["L"],
//  "432": ["/", "B", "D"],
// }


inputF = {
  "432": ["/", "/", "B", "D"],
  "53": false,
}
console.log(deduplicate(inputF));
//  "432": ["/", "B", "D"],


// elements are words
inputF = {
  "432": ["abc", "B", "D"],
  "53": ['abc', 'abc'],
}
console.log(deduplicate(inputF));
// {
// '53' : []
// "432": ["abc", "B", "D"],
// }

// case insensitivity
inputG = {
  "432": ["B", "D"],
  "53": ['b', 'b'],
}
console.log(deduplicate(inputG));
// {
// '53' : []
// "432": ["B", "D"],
// }


// non string number
inputG = {
  "a": ["B", "D"],
  "53": ['b', 'b'],
}
console.log(deduplicate(inputG));
// 'invalid input'

// empty object
console.log(deduplicate({}));
// {}

// empty string
inputG = {
  "1": ["B", "D"],
  "2": ['', ''],
}
console.log(deduplicate(inputG));
// {
//   "1" : ['b', 'd'];
//   '2' : ['']
// }
