const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
}

const reversed = arr.slice(0, arr.length - 1).reverse();

console.log(arr.concat(reversed).join('\n'));