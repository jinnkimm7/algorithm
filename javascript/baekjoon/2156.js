const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const amounts = [0];

for (let i = 1; i <= n; i++) {
  amounts.push(Number(input[i]));
}

const dp = new Array(n + 1).fill(0);
dp[1] = amounts[1];
dp[2] = amounts[1] + amounts[2];
dp[3] = Math.max(amounts[1] + amounts[2], amounts[2] + amounts[3], amounts[1] + amounts[3]);

for (let i = 4; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + amounts[i] + amounts[i - 1],
    dp[i - 2] + amounts[i],
    dp[i - 1],
  )
}

console.log(dp[n])