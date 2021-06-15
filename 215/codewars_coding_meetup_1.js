#! /usr/bin/env node

// https://www.codewars.com/kata/coding-meetup-number-1-higher-order-functions-series-count-the-number-of-javascript-developers-coming-from-europe


function europeJS(objList) {
  if (!isValid(objList)) return 'invalid input';

  return objList.reduce((acc, obj) => {
    let continentKey = Object.keys(obj).find(key => key.toLowerCase() === 'continent') || '';
    let languageKey = Object.keys(obj).find(key => key.toLowerCase() === 'language') || '';

    if (typeof obj[continentKey] === 'string' &&
      obj[continentKey].toLowerCase() === 'europe' &&
      typeof obj[languageKey] === 'string' &&
      obj[languageKey].toLowerCase() === 'javascript') {
    acc += 1;
    }
    return acc;
  }, 0);
}

function isValid(input) {
  return Array.isArray(input) &&
    input.length > 0 && input.every(element => typeof element === 'object' && !Array.isArray(element))
}

// simplest case
var simplest = [
  { continent: 'Europe', language: 'JavaScript' },
];
console.log(europeJS(simplest) === 1);

// - happy path
var listA = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
console.log(europeJS(listA) === 1);


// default is 0
var listB = [
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
console.log(europeJS(listB) === 0);


// both values must be Europe and JavaScript
var listC = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'abc', age: 19, language: 'JavaScript' },
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'abc' },

];
console.log(europeJS(listC) === 1);


// if not array -> "invalid input"
console.log(europeJS({}) === 'invalid input');

// empty array -> invalid
console.log(europeJS([]) === 'invalid input');


// any non object elements -> 'invalid input'
var listD = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  false,
  true,
];
console.log(europeJS(listD) === 'invalid input');


// empty object -> ignore
var listE = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  {},
];
console.log(europeJS(listE) === 2);


// missing key -> ignore
var listF = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland',  age: 19, language: 'JavaScript' },
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  {},
];
console.log(europeJS(listF) === 1);


// key is case insensitive
var listE = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', CONTINENT: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, LANGUAGE: 'JavaScript' },
  {},
];
console.log(europeJS(listE) === 2);


// value is not a string -> ignore
var listF = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: true, age: 19, language: 'JavaScript' },
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: undefined },
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  {},
];
console.log(europeJS(listF) === 1);


// string value is not case sensitive
var listE = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'EUROPE', age: 19, language: 'JavaScript' },
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JAVASCRIPT' },
  {},
];
console.log(europeJS(listE) === 2);
