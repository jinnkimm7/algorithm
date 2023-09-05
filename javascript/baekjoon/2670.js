const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const arr = [0];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

const dp = [0, arr[1]];
for (let i = 2; i <= n; i++) {
  dp[i] = Math.max(arr[i], arr[i] * dp[i - 1]);
}

console.log(Math.max(...dp).toFixed(3));