const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b, 0);

console.log(arr.join('\n'));