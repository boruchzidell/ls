#! /usr/bin/env node

function caesarEncrypt(string, shift) {
  return string.replace(/[a-z]/gi, (letter) => cipher(letter, shift));
}

function cipher(letter, shift) {
  let offset = letter.toUpperCase() === letter ? 65 : 97;

  let ascii = ((letter.codePointAt(0) - offset + shift) % 26) + offset;

  return String.fromCodePoint(ascii);
}

// simple shift
console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");

// wrap around
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");
