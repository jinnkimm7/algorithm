const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const a = [0, ...input[1].split(' ').map(Number)];
const dp = [0, 1, ...new Array(n - 1).fill(0)];

for (let i = 1; i < a.length; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (a[i] > a[j]) {
      max = Math.max(max, dp[j]);
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));