#! /usr/bin/env node

function compareVersions(version1, version2) {

  if (isInValidInput(version1) || isInValidInput(version2)) return null;

  let [oneNumbers, twoNumbers] =
    [version1, version2].map((string) => {
      return string.split('.').map(Number);
    });

  let longestArray = Math.max(oneNumbers.length, twoNumbers.length);

  for (let i = 0; i < longestArray; i += 1) {
    let first = oneNumbers[i] || 0;
    let second = twoNumbers[i] || 0;

    if ( first < second) return -1;
    if ( first > second) return 1;
  }

  return 0;
}

function isInValidInput(str) {
  return str.match(/[^\d.]/) ||   // anything other than digits and periods
    !str ||                       // empty string
    str.match(/^\.|\.$/) ||       // leading and trailing dots
    str.match(/\.{2,}/);          // successive dots
}

// invalid cases
console.log(compareVersions('1.a', '1') === null);
console.log(compareVersions('.1', '1') === null);
console.log(compareVersions('1.', '2') === null);
console.log(compareVersions('1..0', '2.0') === null);
console.log(compareVersions('1.18.a', '13.37') === null);
console.log(compareVersions('1.18.2', 'a') === null);
console.log(compareVersions('1.18.2', '') === null);
console.log(compareVersions('', '') === null);

// generic cases
console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '0.1') === 1);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.0', '1.1') === -1);
console.log(compareVersions('1.1', '1.2') === -1);
console.log(compareVersions('1.2', '1.2.0.0') === 0);
console.log(compareVersions('1.2', '1.2.0.9') === -1);
console.log(compareVersions('1.2.0.0', '1.18.2') === -1);
console.log(compareVersions('1.18.2', '13.37') === -1);
