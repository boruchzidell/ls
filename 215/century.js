#! /usr/bin/env node

function century(yearNum) {
  let year = yearNum;
  if (yearNum % 100 === 0) year -= 1;

  let century = Math.floor(year / 100) + 1;

  return formatNumber(century);
}

function formatNumber(number) {
  let numString = String(number).padStart(2, '0');;

  let suffixArray = [, 'st', 'nd', 'rd'];

  let suffix = suffixArray[Number(numString[numString.length-1])] || 'th';

  if (numString.slice(-2, -1) === '1') {
    suffix = 'th';
  }

  return String(number) + suffix;
}

console.log(century(1)    === '1st' );
console.log(century(101)  === '2nd' );
console.log(century(2013) === '21st');
console.log(century(1301) === '14th');
console.log(century(1300) === '13th');
console.log(century(1901) === '20th');
console.log(century(2000) === '20th');
console.log(century(2001) === '21st');
console.log(century(3001) === '31st');
console.log(century(22222)=== '223rd');
console.log(century(22512)=== '226th');
