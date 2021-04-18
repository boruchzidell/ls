#! /usr/bin/env node

// Implement Array.prototype.reduce clone

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

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum));                // 39
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
console.log(myReduce(['a', 'b', 'c'], (acc, element) => {
  return acc += element;
}), '');                                                      // 'abc'
