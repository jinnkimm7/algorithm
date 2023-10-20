const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const k = Number(input[1]);

let start = 1;
let end = n * n;

let answer = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0; // mid보다 작거나 같은 데이터의 수
  for (let i = 1; i <= n; i++) {
    total += Math.min(parseInt(mid / i), n);
  }

  if (total >= k) {
    answer = mid;
    end = mid - 1;
  }
  else start = mid + 1;
}

console.log(answer);