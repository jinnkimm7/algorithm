const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let answer = 0;
const arr = input[0].split('');

const stack = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '(' && arr[i + 1] === ')') answer += stack.length;
  else if (arr[i] === '(') stack.push('(');
  else if (arr[i] === ')' && arr[i - 1] === '(') continue;
  else if (arr[i] === ')') {
    stack.pop();
    answer += 1;
  }
}

console.log(answer);