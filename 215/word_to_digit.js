#! /usr/bin/env node







const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(sentence) {
  let fixed = sentence;

  numberWords.forEach(number => {
    let re = new RegExp(number, 'gi');
    fixed = fixed.replace(re, numberWords.indexOf(number));
  })

  return fixed;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'))//=== "Please call me at 5 5 5 1 2 3 4. Thanks.");
