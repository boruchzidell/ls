#! /usr/bin/env node

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function vigenere(plaintext, key) {
  let encryptedString = '';
  let plaintextPostion = 0;

  for (let i = 0; i < plaintext.length; i += 1) {
    let currentChar = plaintext[i];

    if (currentChar.match(/[a-z]/i)) {
      let keyLetter = key[plaintextPostion % key.length];
      let currentShiftValue = alphabet.indexOf(keyLetter.toLowerCase());

      encryptedString += caesar(currentChar, currentShiftValue);

      plaintextPostion += 1;
    } else {
      encryptedString += currentChar;
    }
  }

  return encryptedString;
}

function caesar(letter, shift) {
  let offset = letter.toUpperCase() === letter ? 65 : 97;

  return String.fromCharCode(((letter.codePointAt(0) + shift - offset) % 26) + offset);
}

console.log(vigenere("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");
