#! /usr/bin/env node

function isBalanced(string) {
  let open = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') open += 1;
    if (string[i] === ')') open -= 1;
    if (open < 0) return false;
  }

  return open === 0;
}

console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!') === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);
