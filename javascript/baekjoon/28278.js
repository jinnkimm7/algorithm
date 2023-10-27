const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let n = Number(input[0]);

const stack = [];

let answer = '';

let line = 1;
while (n--) {
  const [cmd, val] = input[line].split(' ').map(Number);

  if (cmd === 1) {
    stack.push(val);
  } else if (cmd === 2) {
    if (stack.length !== 0) {
      answer += stack.pop() + '\n';
    } else {
      answer += -1 + '\n';
    }
  } else if (cmd === 3) {
    answer += stack.length + '\n';
  } else if (cmd === 4) {
    if (stack.length !== 0) {
      answer += '0' + '\n';
    } else {
      answer += '1' + '\n';
    }
  } else if (cmd === 5) {
    if (stack.length !== 0) {
      answer += stack[stack.length - 1] + '\n';
    } else {
      answer += -1 + '\n';
    }
  }

  line++;
}

console.log(answer);