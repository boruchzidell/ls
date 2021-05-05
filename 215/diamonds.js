#! /usr/bin/env node

function diamond(limit) {
  let output = [];

  for (let i = 1; i <= limit; i += 2) {
    output.push(buildLine(limit, i));
  }

  for (let i = limit - 2; i >= 1; i -= 2) {
    output.push(buildLine(limit, i));
  }

  return output.join("\n");
}

function buildLine(limit, stars) {
  let spaces = (limit - stars) / 2;
  return ' '.repeat(spaces) + '*'.repeat(stars);
}

console.log(diamond(9));
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
