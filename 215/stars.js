#! /usr/bin/env node

function star(max) {
  let starArray = ['*'.repeat(max)];

  for (let line = 0; line <= (max - 3) / 2; line += 1) {
    starArray.push(buildLine(max, line));
    starArray.unshift(buildLine(max, line));
  }

  starArray.forEach((line) => console.log(line));
}

function buildLine(max, line) {
  let stars = ['*', '*', '*'].join(' '.repeat(line));
  let leadingSpaces = ' '.repeat(((max - 3) / 2) - line);

  return leadingSpaces + stars;
}

star(9);
star(7);

// logs

/*

*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

*/
