const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// n : 구매하려는 카드의 갯수
const n = Number(input[0]);

// prices : i개가 들어있는 팩의 가격
const prices = [0, ...input[1].split(' ').map(Number)];

// dp : i개 구매 시 최댓값
const dp = [0, ...new Array(n).fill(0)];

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + prices[j]);
  }
}

console.log(dp[n]);