#! /usr/bin/env node
/* eslint-disable */

/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]
Explanation of the above:

Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
Notes:

Preserve the order of the original list.
Return an empty array [] if there is no developer with an "odd" name.
*/

function ascii(array) {
  if (!Array.isArray(array)) return 'invalid input';

  return array.filter(obj => {
    if (!isObj(obj)) return false;

    return asciiSum(obj.firstName) % 2 === 1;
  });
}

function isObj(obj) {
  return typeof obj === 'object' &&
    obj.firstName &&
    typeof obj.firstName === 'string';
}

function asciiSum(string) {
  return [...string].reduce( (sum, letter) => {
    return letter.codePointAt(0) + sum;
  }, 0);
}


// happy path
let listA = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
console.log(ascii(listA));
//  [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];


// empty string
let listB = [
  { firstName: '', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
console.log(ascii(listB));
//  [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];


// invalid input
console.log(ascii({}));
// 'invalid input'


// non letter chars
let listC = [
  { firstName: '///', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
console.log(ascii(listC));
// [
//   { firstName: '///', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];


// 1 letter string
let listF = [
  { firstName: 'A', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
console.log(ascii(listF));
// [
//   { firstName: 'A', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];

// empty array
console.log(ascii([]));
// []

// missing key
let listD = [
  {                    lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
console.log(ascii(listD));
// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];
