// 골드 5
// https://www.acmicpc.net/problem/9251

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const arr1 = input[0].split('');
const arr2 = input[1].split('');

const dp = new Array(arr1.length + 1)
  .fill(0)
  .map(val => new Array(arr2.length + 1).fill(0));

for (let i = 1; i <= arr1.length; i++) {
  for (let j = 1; j <= arr2.length; j++) {
    if (arr1[i - 1] === arr2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}

console.log(dp[arr1.length][arr2.length]);