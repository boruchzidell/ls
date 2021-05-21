#! /usr/bin/env node

function luhn(stringNumber) {
  let digits = stringNumber.match(/\d/g).map(Number);

  let doubledDigits = digits.map((digit, index, array) => {
      if ((array.length - index) % 2 === 0) {
        let doubled = digit * 2;

        if (doubled >= 10) {
          doubled -= 9;
        }
        return doubled;
      } else {
        return digit;
      }
  })

  let sum = doubledDigits.reduce((sum, digit) => sum + digit, 0);

  return sum % 10 === 0;
}

console.log(luhn('1111') === false);
console.log(luhn('8763') === true);
console.log(luhn('2323 2005 7766 3554') == true);
