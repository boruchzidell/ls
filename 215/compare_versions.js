#! /usr/bin/env node

function compareVersions(version1, version2) {

  for (let str of [version1, version2]) {
    if (isInValidInput(str)) return null;
  }

  let [oneNumbers, twoNumbers] = [version1, version2].map( (string) => {
    return string.split('.').map(Number);
  });

  let lengthOne = oneNumbers.length;
  let lengthTwo = twoNumbers.length;

  // Account for uneven array sizes
  if ( lengthOne < lengthTwo) {
    oneNumbers = padArray(oneNumbers, (lengthTwo - lengthOne));
  }

  for (let i = 0; i < oneNumbers.length; i += 1) {
    let first = oneNumbers[i];
    let second = twoNumbers[i] || 0;   // account for second array being shorter

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

function padArray(array, padding) {
  let padded = [...array];

  for (let i = 1; i <= padding; i += 1) {
    padded.push(0);
  }

  return padded;
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
