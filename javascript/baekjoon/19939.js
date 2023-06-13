const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let [N, K] = input[0].split(' ').map(Number);

const sum = new Array(K)
  .fill(1).map((v, i) => v + i)
  .reduce((a, b) => a + b, 0);

if (sum > N) console.log(-1);
else {
  N -= sum;
  if (N % K === 0) console.log(K - 1);
  else console.log(K);
}