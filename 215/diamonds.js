#! /usr/bin/env node

function diamond(limit) {
  let starSequence = [];

  let increment = 2;

  for (let i = 1; i >= 1; i += increment) {
    if (i === limit) {
      increment = -2;
    }

    starSequence.push(i);
  }

  starSequence.forEach((number) => {
    console.log(buildLine(limit, number));
  });

}

function buildLine(limit, stars) {
  let spaces = (limit - stars) / 2;
  return ' '.repeat(spaces) + '*'.repeat(stars);
}

diamond(9);

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
