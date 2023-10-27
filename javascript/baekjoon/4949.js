const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let answer = [];
const arr = input.join('').split('.');

arr.forEach((str) => {
  const stack = [];

  [...str].forEach((char, index) => {
    if (char === '(') {
      stack.push(char);
    }

    if (char === ')') {
      if (stack[stack.length - 1] === '(') stack.pop();
      else {
        stack.push(char);
      }
    }

    if (char === '[') {
      stack.push(char);
    }

    if (char === ']') {
      if (stack[stack.length - 1] === '[') stack.pop();
      else {
        stack.push(char);
      }
    }

  })

  if (stack.length === 0) answer.push('yes');
  else answer.push('no');
});

console.log(answer.slice(0, answer.length - 2).join('\n'));