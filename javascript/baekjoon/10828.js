const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const stack = [];
const answer = [];

for (let i = 1; i <= n; i++) {
  const data = input[i].split(' ');
  const method = data[0];
  const element = Number(data[1]);

  if (method === 'push') {
    stack.push(element);
  } else if (method === 'pop') {
    if (stack.length) answer.push(stack.pop());
    else answer.push(-1);
  } else if (method === 'size') {
    answer.push(stack.length);
  } else if (method === 'empty') {
    if (stack.length) answer.push(0);
    else answer.push(1);
  } else if (method === 'top') {
    if (stack.length) answer.push(stack[stack.length - 1]);
    else answer.push(-1);
  }
}

console.log(answer.join('\n'));