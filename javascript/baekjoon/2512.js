const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const budgets = input[1].split(' ').map(Number);
let limit = Number(input[2]);

budgets.sort((a, b) => a - b);

let start = 1;
let end = budgets[n - 1];

let answer = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let budget of budgets) {
    total += Math.min(budget, mid);
  }

  if (total > limit) end = mid - 1;
  else {
    start = mid + 1;
    answer = mid;
  }
}

console.log(answer);