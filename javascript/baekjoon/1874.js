const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const target = [];
for (let i = 1; i <= n; i++) target.push(Number(input[i]));

const stack = [];
let j = 1;
let answer = [];
for (let i = 0; i < target.length; i++) {
  while (target[i] >= j) {
    stack.push(j);
    answer.push('+');
    j++;
  }

  let popped = stack.pop();
  answer.push('-');

  if (popped !== target[i]) {
    answer = ['NO'];
    break;
  }
}

console.log(answer.join('\n'));