const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const lines = [];

for (let i = 1; i <= k; i++) lines.push(Number(input[i]));
lines.sort((a, b) => a - b);

let start = 1;
let end = lines[lines.length - 1];

let answer = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let count = 0;
  for (let line of lines) {
    count += parseInt(line / mid);
  }

  if (count >= n) {
    answer = mid;
    start = mid + 1;
  }
  else end = mid - 1;
}

console.log(answer);