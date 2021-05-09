#! /usr/bin/env node

let mainBlocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT',
  'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

function isBlockWord(word) {
  let blocks = [...mainBlocks];

  for (let letter of word) {
    let index = blocks.findIndex((block) => block.includes(letter.toUpperCase()));
    if (index !== -1) {
      blocks.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH') === true);
console.log(isBlockWord('BUTCH') === false);

console.log(isBlockWord('jest') === true);

console.log(isBlockWord('Jest') === true);
console.log(isBlockWord('jjest') === false);

console.log(isBlockWord('aa') === false);
console.log(isBlockWord('Aa') === false);
