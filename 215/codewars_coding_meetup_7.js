#! /usr/bin/env node
/* eslint-disable*/

// https://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer

/*
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
your function should return the following array:

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
Notes:

The input array will always be valid and formatted as in the example above.


  input - array of objects
  output - array of objects

  rules
    - given an array of objects, return a new array of objects, in which the age value is the highest of all
    - when two objects have the same age value, return both objects
    - preserve original order in case of tie



  test cases / crux
    - happy path
    - error
    - default return
    - edge cases


  algo / shape
    X - guard clause for all the invalid input possibilities
      if function isValid === false -> return 'invalid input'

    - get highest age across all the objects (case insensive)
      - reduce by reading the age.toLowerCase() property of each object

    - filter the array for that age
      - age === highestAge

    - return the filtered array


    - FUNCTION isValid
      - input - array of objects
      - output - boolean
      - rules
        - return 'invalid input' if any object is:
          - missing age key (insensitive)
          - age value is not a number
          - age value <= 0
      - algo

  */

function oldestDev(array) {
  if (!isValid(array)) return 'invalid input';

  let highestAge = array.reduce((highest, obj) => {
    let ageKey = Object.keys(obj).find(key => key.toLowerCase() === 'age');
    return Math.max(highest, obj[ageKey]);
  }, 0);

  return array.filter(obj => {
    let ageKey = Object.keys(obj).find(key => key.toLowerCase() === 'age');
    return obj[ageKey] === highestAge;
  });
}

function isValid(objList) {
  return objList.every(obj => {
    let ageKey = Object.keys(obj).find(key => key.toLowerCase() === 'age');

    return ageKey && typeof obj[ageKey] === 'number' && obj[ageKey] > 0;
  });

}


var listA = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
];

// happy path
console.log(oldestDev(listA));
// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
// ]


// ties
var listB = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
console.log(oldestDev(listB));
// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]


// empty array
console.log(oldestDev([]));
// []

// missing age key
 var listC = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe',     language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
 ];
 console.log(oldestDev(listC));
// 'invalid input'

// object values can be wrong data type -> 'invalid input'
var listD = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: true,    language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
];
console.log(oldestDev(listD));
// 'invalid input'


// - keys can be wrong case - case insensitive
 var listE = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', AGE: 49,    language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
 ];
 console.log(oldestDev(listE));
// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', Age: 49,    language: 'PHP' },
// ];


//- age is a non positive number -> 'invalid input'
 var listF = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 0,    language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
 ];
 console.log(oldestDev(listF));
// 'invalid input'


//- age can be a decimal
var listG = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 1.1,    language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 1.0, language: 'Python' },
 ];
console.log(oldestDev(listG));
// [
//  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 1.1,    language: 'PHP' },
// ];
