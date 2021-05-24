#! /usr/bin/env node

function letterPercentages(string) {
  let lowerCount    = (string.match(/[a-z]/g) || []).length;
  let upperCount    = (string.match(/[A-Z]/g) || []).length;
  let neitherCount  = (string.match(/[^A-Z]/ig) || []).length;

  return {
    lowercase: formatPercentage(lowerCount),
    uppercase: formatPercentage(upperCount),
    neither:   formatPercentage(neitherCount),
  }

  function formatPercentage(int) {
    let raw = (int / string.length) * 100;

    return raw.toFixed(2);
  }
}

console.log(letterPercentages('abCdef 123'));;
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));;
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));;
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
