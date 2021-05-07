#! /usr/bin/env node


function compareVersions(version1, version2) {

  for (let str of [version1, version2]) {
    if (str.match(/[^\d\.]/) || !str) return null;
  }

  let [oneNumbers, twoNumbers] = [version1, version2].map( (string) => {
    return string.split('.').map(Number);
  });

  // Account for uneven array sizes
  if (oneNumbers.length < twoNumbers.length) {
    oneNumbers = padArray(oneNumbers, (twoNumbers.length - oneNumbers.length));
  }

  for (let i = 0; i < oneNumbers.length; i += 1) {
    let first = oneNumbers[i];
    let second = twoNumbers[i] || 0;   // account for second array being shorter

    if ( first < second) return -1;
    if ( first > second) return 1;
  }

  return 0;
}

function padArray(array, padding) {
  let padded = [...array];

  for (let i = 1; i <= padding; i += 1) {
    padded.push(0);
  }

  return padded;
}

console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '0.1') === 1);

console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.0', '1.1') === -1);

console.log(compareVersions('1.1', '1.2') === -1);
console.log(compareVersions('1.2', '1.2.0.0') === 0);

console.log(compareVersions('1.2', '1.2.0.9') === -1);


console.log(compareVersions('1.2.0.0', '1.18.2') === -1);
console.log(compareVersions('1.18.2', '13.37') === -1);

console.log(compareVersions('1.18.a', '13.37') === null);
console.log(compareVersions('1.18.2', 'a') === null);
console.log(compareVersions('1.18.2', '') === null);
console.log(compareVersions('', '') === null);
