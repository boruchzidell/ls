#! /usr/bin/env node
/* eslint-disable*/

// https://www.codewars.com/kata/57b2a9631fae8a30fa000013/solutions/javascript

/*
Here is a rope with a length of x cm. We will cut it in the following way: each m cm to make a mark, and then each n cm to make a mark. Finally, We cut the rope from the marked place. Please calculate that we have a total of several kinds of length of the rope, and how many of each kind of rope?

For example:

length=10  -----here is a rope with length of 10 cm, each "-" is 1cm
----------
m=2  -----------we make marks at each 2cm, "." is the mark
--.--.--.--.--
n=3  -----------we make marks at each 3cm, "." is the mark
--.-.-.--.--.-.-
cut the rope from these marked place, we got:
--  -  -  --  --  -  -
so the result should be: 1cm rope x 4 and 2cm rope x 3
Task
Complete function cutRope() that accepts three arguments length, m and n(three positive integer). Their meaning please refer to the above explanation.

You should return an object that contains all kinds of rope and its numbers. Like the example above, should return: {"1cm":4,"2cm":3}

Examples
cutRope(6,2,3) === {"1cm":2,"2cm":2}
cutRope(7,2,3) === {"1cm":3,"2cm":2}
cutRope(10,2,3) === {"1cm":4,"2cm":3}
cutRope(10,2,5) === {"1cm":2,"2cm":4}
cutRope(11,2,5) === {"1cm":3,"2cm":4}

INPUT - Length, firstCut, secondCut
OUTPUT - object. keys- length of section. values- count of occurances

RULES
  - given a length of rope make cuts every m length and every n length
  - return a tally of the resulting lengths

TEST CASES

ALGO / shape (iteration)
  APPROACH: build up a new string representing the lengths and cuts
  x - set result to empty string
  x- create a string of "-" the length of the repe
    x- a FOR loop over the string
     x - concat "-" to result
     x - if the NEXT index is divisible by m or n then concat "1" to the result

  x- split result on "1" to produce an array of string chunks and assign to chunkArray
  - tally up string chunks:
    - reduce chunkArray to an object
      - get length of current chunk
      - if length > 0
        - access that key from the object with a default value of 0
     X   - increment that key's value by 1

  x- coerce tally object to nested array (entries)
   x - sort the nested array by the first subarray element coerced to a NUMBER

  x- map the sorted array
    - coerce the first subarray element to stringified number concated to "cm"

  - coerce the nested array to an object (fromEntries)
  - return the object

*/

function cutRope(length, m, n) {
  let rope = '-'.repeat(length);
  let result = '';

  for (let i = 0; i < rope.length; i += 1) {
    result += '-';
    if (((i+1) % m === 0) ||((i+1) % n === 0) ) result += '1'
  }

  let chunkArray = result.split('1');

  let tally = chunkArray.reduce((obj, chunk) => {
    let currentLength = chunk.length;

    if (currentLength > 0) {
      obj[currentLength] ||= 0;
      obj[currentLength] += 1;
    }

    return obj;
  }, { });


  let tallyArray = Object.entries(tally);

  tallyArray.sort((a, b) => {
    return Number(a[0]) - Number(b[0]);
  });

  let centimeterLength = tallyArray.map(subarray => {
    subarray[0] += 'cm';
    return subarray;
  });

  return centimeterLength.reduce((obj, subarray) => {
    obj[subarray[0]] = subarray[1];
    return obj;
  }, {});
}

console.log(cutRope(6,2,3)); // === {"1cm":2,"2cm":2}
console.log(cutRope(7,2,3)); // === {"1cm":3,"2cm":2}
console.log(cutRope(10,2,3)); // === {"1cm":4,"2cm":3}
console.log(cutRope(10,2,5)); // === {"1cm":2,"2cm":4}
console.log(cutRope(11,2,5)); // === {"1cm":3,"2cm":4}
console.log(cutRope(6, 0, 3)); // === {"3cm":2}
console.log(cutRope(6, 7, 3)); // === {"3cm":2}
console.log(cutRope(6, 1, 2)); // === {"1cm":6}
