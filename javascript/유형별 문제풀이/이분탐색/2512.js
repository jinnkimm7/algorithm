// 실버 2
// https://www.acmicpc.net/problem/2512

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const budgets = input[1].split(' ').map(Number).sort((a, b) => a - b);

const max = budgets[n - 1];

let start = 1;
let end = max;

const limit = Number(input[2]);

let answer = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let spend = 0;
  for (let budget of budgets) {
    if (budget > mid) spend += mid;
    else spend += budget;
  }

  if (limit < spend) {
    end = mid - 1;
  } else {
    start = mid + 1;
    answer = mid;
  }
}
console.log(answer);