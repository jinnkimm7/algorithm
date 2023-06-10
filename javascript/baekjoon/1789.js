const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const S = Number(input[0]);
let sum = 0;
let current = 0;

while (sum <= S) {
  current++;
  sum += current;
}

console.log(current - 1);