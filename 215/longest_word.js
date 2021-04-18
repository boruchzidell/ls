#! /usr/bin/env node

// Implement a function that takes a list of words as an argument and returns the word with the most characters:

function myReduce(array, func, initial) {
  let acc = initial || array[0];

  let newArray;

  if (initial === undefined) {
    newArray = array.slice(1);
  } else {
    newArray = array.slice();
  }

  newArray.forEach(element => {
    acc = func(acc, element);
  });

  return acc;
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

function longestWord(words) {
  return myReduce(words, longest)
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
