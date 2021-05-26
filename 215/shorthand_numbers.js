#! /usr/bin/env node

function expander(string) {
  let ranges = string.split(', ')

  let numberResults = [];

  ranges.forEach(section => {
    if (section.match(/\D/)) {
      let ranges = section.split(/[-:.]+/);

      let rangesComputed = [];

      for (let i = 0; i < ranges.length; i += 1) {
        if (i === 0) {
          let lastOfRange = numberResults[numberResults.length - 1] || 0;
          rangesComputed.push(computeNumber(lastOfRange, ranges[i]));
        } else {
          rangesComputed.push(computeNumber(rangesComputed[rangesComputed.length - 1], ranges[i]));
        }
      }

      let reduced = rangesComputed.reduce((acc, element, idx) => {
        let current = element;
        do {
          acc.push(current);
          current += 1;
        } while (current < rangesComputed[idx + 1]);
        return acc;
      }, []);

      numberResults = numberResults.concat(reduced);
    } else {
      numberResults.push(computeNumber(numberResults[numberResults.length - 1] || 0, section))
    }

  });

  return numberResults;
}

function computeNumber(previous, current) {
  if (Number(current) > Number(previous)) {
    return Number(current);
  } else {
    let left = String(previous).slice(0, String(previous).length - current.length) || 0;
    let right = String(previous).slice(String(previous).length - current.length);
    if (right > current) {
      return Number(String(Number(left) + 1) + current);
    } else {
      return Number(left + current);
    }
  }
}

console.log(expander("1, 3, 7, 2, 4, 1"));  // [1, 3, 7, 12, 14, 21]
console.log(expander("1-3, 1-2"));          // [1, 2, 3, 11, 12]
console.log(expander("1:5:2"));             // [1, 2, 3, 4, 5, 6, ... 12]
console.log(expander("104-2"));             // [104, 105, ... 112]
console.log(expander("104-02"));            // [104, 105, ... 202]
console.log(expander("545, 64:11"));        // [545, 564, 565, .. 611]
