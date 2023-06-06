const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(v => Number(v));
const baskets = new Array(n).fill(0);

for (let a = 1; a <= m; a++) {
  const [i, j, k] = input[a].split(' ').map(v => Number(v));
  for (let b = i; b <= j; b++) baskets[b - 1] = k;
}

console.log(baskets.join(' '));