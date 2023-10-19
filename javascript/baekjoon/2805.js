const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number).sort((a, b) => a - b);

const max = trees[trees.length - 1];

let start = 0;
let end = max;

let answer = 0;
while (start <= end) {
  const mid = parseInt((start + end) / 2);

  let cut = 0;
  for (let tree of trees) {
    if (tree > mid) cut += (tree - mid);
  }

  if (cut >= m) {
    answer = mid;
    start = mid + 1;
  }
  else end = mid - 1;
}

console.log(answer);