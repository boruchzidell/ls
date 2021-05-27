#! /usr/bin/env node

function triangle(a, b, c) {
  if (isInvalid(a, b, c)) return "invalid";

  if (a === b && b === c) return "equilateral";
  if (a === b || b === c || c === a) return "isosceles";
  return "scalene"
}

function isInvalid(...args) {
  let [first, second, third] = [...args].sort((a, b) => a - b);

  return (first + second <= third) || (first <= 0);
}

console.log(triangle(3, 3, 3)   === "equilateral");
console.log(triangle(3, 3, 1.5) === "isosceles");
console.log(triangle(3, 4, 5)   === "scalene");
console.log(triangle(0, 3, 3)   === "invalid");
console.log(triangle(3, 1, 1)   === "invalid");
