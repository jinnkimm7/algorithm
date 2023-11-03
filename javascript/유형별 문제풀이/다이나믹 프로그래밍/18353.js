// 실버 2
// https://www.acmicpc.net/problem/18353

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const dp = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] < arr[j]) dp[i] = Math.max(dp[j] + 1, dp[i]);
  }
}

console.log(n - Math.max(...dp));
