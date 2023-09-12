const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' '));
}
console.log(arr.sort((a, b) => a[0] - b[0]).map(el => el.join(' ')).join('\n'));