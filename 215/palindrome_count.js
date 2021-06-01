#! /usr/bin/env node

function palindromeCount(string) {
  let counter = 0;

  string
    .toLowerCase()
    .split(' ')
    .forEach((word) => { if (isPalindrome(word))  counter += 1 });

  return counter;
}

function isPalindrome(word) {
  let tally = [...word].reduce((acc, letter) => {
    acc[letter] ||= 0;
    acc[letter] += 1;
    return acc;
  }, {})

  let oddCount = Object.values(tally).filter((value) => value % 2 !==0)

  return oddCount.length <= 1;
}

// happy path
console.log(palindromeCount("aaa bca Abab") === 2);


// single letter
console.log(palindromeCount("a") === 1);

// case insensitivity
console.log(palindromeCount("Aaa Bca Abab") === 2);
console.log(palindromeCount("AAA BCA ABAB") === 2);

// nothing found
console.log(palindromeCount("abc") === 0);
