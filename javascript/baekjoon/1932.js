const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const dp = [];
for (let i = 1; i <= n; i++) {
  dp.push(input[i].split(' ').map(Number));
}

for (let i = 1; i < dp.length; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    let upLeft = 0;
    if (j !== 0) {
      upLeft = dp[i - 1][j - 1];
    }

    let up = 0;
    if (j !== dp[i].length - 1) {
      up = dp[i - 1][j];
    }

    dp[i][j] = Math.max(dp[i][j] + upLeft, dp[i][j] + up);
  }
}

console.log(Math.max(...dp[dp.length - 1]));