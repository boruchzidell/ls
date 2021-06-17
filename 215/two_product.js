#! /usr/bin/env node

// https://edabit.com/challenge/muXiqFTyE23uknv4o

// Create a function that takes an array arr and a number n and returns an array of two integers from arr whose product is that of the number n of the following form:

// [value_at_lower_index, value_at_higher_index]

// Make sure that you return an array of two integers that exactly divides n (product of n) and that the indices coincide the above format. The sorting of the values therefore is based on the indices ascendingly.

// Examples
// twoProduct([1, 2, 3, 9, 4, 5, 15, 3], 45) ➞ [9, 5]
// 3, 15  (2, 6)
// 9, 5   (3, 5)

// at index 5 which has the value 5 is  a full match
// to the value at index 3 which is 9

// the closest gap between indices that equates
// to the product which is 45w

// simplest
console.log(twoProduct([1,2,3,4], 6))
// [2, 3]


// happy path
console.log(twoProduct([1, 2, 3, 9, 4, 5, 15, 3], 45))
// [9, 5]

// error
console.log(twoProduct([100, 12, 4, 1, 2], 15) )
// undefined


function twoProduct(array, product) {
  let result = [];

  for (let first = 0; first <= array.length -2 ; first += 1){
    for (let second = first + 1; second <= array.length - 1; second += 1){
      let first_element = array[first];
      let second_element = array[second];

      let multiplied = first_element * second_element;

      if (multiplied === product) {
        let factors = [first_element, second_element];
        factors.sum = first + second;
        factors.distance = second - first

        result.push(factors);
      }
    }
  }

  result.sort((a, b) => {
    return a.sum - b.sum || a.distance - b.distance;
  });

  if (result.length < 1) return undefined;

  return result[0].slice();  // remove the non-index properties
}
