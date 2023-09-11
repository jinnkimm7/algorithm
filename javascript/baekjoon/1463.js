const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const dp = [0, 0];

for (let i = 2; i <= n; i++) {
  if (i % 2 === 0 & i % 3 === 0) { // 2로도 나누어 떨어지고, 3으로도 나누어 떨어지는 경우,
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1, dp[i / 3] + 1);
  } else if (i % 2 === 0) { // 2로 나누어 떨어지는 경우,
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1);
  } else if (i % 3 === 0) { // 3으로 나누어 떨어지는 경우,
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1);
  } else {
    dp[i] = dp[i - 1] + 1;
  }
}
// console.log(dp);
console.log(dp[n]);