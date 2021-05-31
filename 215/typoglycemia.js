#! /usr/bin/env node

function scramble_words(string) {
  let words = string.split(' ');

  let results = words.map((word) => {
    let cleanedWord = word.replace(/[^a-z]/ig, '');

    let alphabetizedLetters = cleanedWord.replace(/(.)(.*)(.)/, (_, c1, c2, c3) => {
      return c1 + [...c2].sort().join('') + c3;
    });

    let alphabetizedArray = [...alphabetizedLetters];

    [...word].forEach((char, idx) => {
      if (/[-',.]/.test(char)) {
        alphabetizedArray.splice(idx, 0, char);
      }
    });

    return alphabetizedArray.join('');

  });

  return results.join(' ')
}

console.log(scramble_words('zwcba') === 'zbcwa');
console.log(scramble_words('zwcba zwcba') === 'zbcwa zbcwa');
console.log(scramble_words('card-carrying') === 'caac-dinrrryg');
console.log(scramble_words('card.carrying') === 'caac.dinrrryg');
console.log(scramble_words("card'carrying") === "caac'dinrrryg");
console.log(scramble_words('card,carrying') === 'caac,dinrrryg');
console.log(scramble_words('zwcba, zwcba') === 'zbcwa, zbcwa');

// edge cases
console.log(scramble_words('') === '');
console.log(scramble_words('-') === '-');
console.log(scramble_words('i') === 'i');
console.log(scramble_words('-i') === '-i');
console.log(scramble_words('ab') === 'ab');
console.log(scramble_words('-ab') === '-ab');
console.log(scramble_words('a-b') === 'a-b');
console.log(scramble_words('ab-') === 'ab-');
console.log(scramble_words('abc') === 'abc');

// start with non letter char
console.log(scramble_words('-zwcba, zwcba') === '-zbcwa, zbcwa');
console.log(scramble_words('zwcba, .zwcba') === 'zbcwa, .zbcwa');
console.log(scramble_words("'zwcba, zwcba") === "'zbcwa, zbcwa");
console.log(scramble_words(".zwcba, zwcba") === '.zbcwa, zbcwa');
