const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const testCases = Number(input[0]);

const memo = new Array(11).fill(0);
memo[1] = 1;
memo[2] = 2;
memo[3] = 4;

const dp = (num) => {
  for (let i = 4; i <= num; i++) {
    memo[i] = memo[i - 3] + memo[i - 2] + memo[i - 1];
  }
}

for (let tc = 1; tc <= testCases; tc++) {
  const num = Number(input[tc]);
  dp(num);
}

for (let tc = 1; tc <= testCases; tc++) {
  console.log(memo[Number(input[tc])]);
}
