const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);

const dp = [0, 1, 2];
for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

const arr = [];
let start = 0;
for (let i = 2; i < m + 2; i++) {
  const end = Number(input[i]);
  arr.push(end - start - 1);
  start = end;
}
arr.push(n - start);

let answer = 1;
for (let i of arr) {
  if (i === 0) continue;
  answer *= dp[i];
}

console.log(answer);