const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numArr = input[1].split(' ').map(Number);

let answer = 0;
let end = 0;
let sum = 0;

for (let start = 0; start < N; start++) {
  while (end < N && sum < M) {
    sum += numArr[end];
    end++;
  }
  if (sum === M) answer++;
  sum -= numArr[start];
}

console.log(answer);