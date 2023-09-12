const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const arr = [0];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));

const dp = [0, arr[1], arr[1] + arr[2]];
for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + arr[i],
    dp[i - 3] + arr[i] + arr[i - 1]);
}

console.log(dp[n]);