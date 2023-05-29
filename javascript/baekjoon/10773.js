const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const stack = [];

for (let i = 1; i <= n; i++) {
  const number = Number(input[i]);

  if (number === 0) stack.pop();
  else stack.push(number);
}

console.log(stack.reduce((a, b) => a + b, 0));