const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(v => Number(v));
const baskets = new Array(n).fill(1).map((v, i) => v + i);

for (let a = 1; a <= m; a++) {
  const [i, j] = input[a].split(' ').map(v => Number(v));
  let temp = baskets[i - 1];
  baskets[i - 1] = baskets[j - 1];
  baskets[j - 1] = temp;
}

console.log(baskets.join(' '));