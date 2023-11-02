// 실버 3
// https://www.acmicpc.net/problem/9095

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let testCases = Number(input[0]);

const memo = [0, 1, 2, 4];

for (let i = 1; i <= testCases; i++) {
  const n = Number(input[i]);
  for (let i = 4; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }
  console.log(memo[n]);
}