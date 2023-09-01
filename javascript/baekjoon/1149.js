const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number));
}

for (let i = 1; i < n; i++) {
  arr[i][0] += Math.min(arr[i - 1][1], arr[i - 1][2]);
  arr[i][1] += Math.min(arr[i - 1][0], arr[i - 1][2]);
  arr[i][2] += Math.min(arr[i - 1][0], arr[i - 1][1]);
}

console.log(Math.min(...arr[arr.length - 1]));