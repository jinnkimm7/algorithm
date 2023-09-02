const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const memo = new Array(41).fill(0);
memo[0] = 0;
memo[1] = 1;

for (let i = 2; i <= 40; i++) {
  memo[i] = memo[i - 1] + memo[i - 2];
}

const testCases = Number(input[0]);
for (let i = 1; i <= testCases; i++) {
  const n = Number(input[i]);

  if (n === 0) console.log("1 0");
  else console.log(`${memo[n - 1]} ${memo[n]}`);
}