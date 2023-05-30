const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const testCases = Number(input[0]);

for (let i = 1; i <= testCases; i++) {
  const string = input[i].split('');
  const stack = [];

  for (let j = 0; j < string.length; j++) {
    const parenthesis = string[j];
    if (parenthesis === '(') stack.push(parenthesis);
    else {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(')');
      }
    }
  }

  console.log(stack.length ? 'NO' : 'YES');
}