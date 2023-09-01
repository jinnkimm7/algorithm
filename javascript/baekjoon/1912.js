const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const arr = [0, ...input[1].split(' ').map(Number)];
const dp = [0, ...new Array(n).fill(0)];

for (let i = 1; i < arr.length; i++) {
  const sum = dp[i - 1] + arr[i];
  if (sum > 0) dp[i] = sum;
  else dp[i] = 0;
}

const answer = Math.max(...dp);

console.log(answer > 0 ? answer : Math.max(...input[1].split(' ').map(Number)));