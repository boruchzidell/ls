#! /usr/bin/env node

// ====================== Main Method ==================================
function expander(string) {
  let rawGroups = string.split(', ')

  let allExpandedNumbers = rawGroups.reduce((array, section) => {
    let lastExpandedNumber = array.slice(-1)[0] || 0;

    // Singles
    if (!section.match(/\D/)) return array.concat(computeNumber(lastExpandedNumber, section));

    // Ranges
    return [...array, ...expandRawRangetoNumbers(lastExpandedNumber, section)];
  }, []);

  return allExpandedNumbers;
}

// ===================  Helper Methods ==================================
function expandRawRangetoNumbers(lastExpandedNumber, rawRangeString) {
  let rawRangeBounds = rawRangeString.split(/[-:.]+/);

  let computedRangeBounds = rawRangeBounds.reduce((array, element, idx) => {
    if (idx === 0) return array.concat(computeNumber(lastExpandedNumber, element));

    return array.concat(computeNumber(array.slice(-1)[0], element));
  }, []);

  let filledRange = computedRangeBounds.reduce((array, element, idx) => {
    let current = element;

    do {
      array.push(current);
      current += 1;
    } while (current < computedRangeBounds[idx + 1]);

    return array;
  }, []);

  return filledRange;
}

function computeNumber(previous, current) {
  let currentNumber = Number(current);

  if (currentNumber > previous) {
    return currentNumber;
  }

  let previousStringNumber = String(previous);
  let leftString = previousStringNumber.slice(0, previousStringNumber.length - current.length) || '0';
  let rightString = previousStringNumber.slice(previousStringNumber.length - current.length);

  if (rightString > current) {
    return Number(String(Number(leftString) + 1) + current);
  }
  return Number(leftString + current);
}

console.log(expander("1, 3, 7, 2, 4, 1"));  // [1, 3, 7, 12, 14, 21]
console.log(expander("1-3, 1-2"));          // [1, 2, 3, 11, 12]
console.log(expander("1:5:2"));             // [1, 2, 3, 4, 5, 6, ... 12]
console.log(expander("104-2"));             // [104, 105, ... 112]
console.log(expander("104-02"));            // [104, 105, ... 202]
console.log(expander("545, 64:11"));        // [545, 564, 565, .. 611]
