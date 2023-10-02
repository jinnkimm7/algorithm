const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const testCases = Number(input[0]);

const fibo = [0, 1, 1];
for (let i = 3; i < 60; i++) {
  const value = fibo[i - 1] + fibo[i - 2];
  if (value <= 1000000000) {
    fibo[i] = value;
  } else break;
}

fibo.reverse();

let answer = '';
for (let tc = 1; tc <= testCases; tc++) {
  const temp = [];
  let target = Number(input[tc]);

  for (let number of fibo) {
    if (number > target) continue;
    else if (number === target) {
      temp.push(number);
      break;
    } else {
      temp.push(number);
      target -= number;
    }
  }

  answer += temp.reverse().join(' ') + '\n'
}

console.log(answer);