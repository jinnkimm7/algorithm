const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// 누적합 구하기
const prefixSum = [0];
let sum = 0;
for (let i of arr) {
  sum += i;
  prefixSum.push(sum);
}

let answer = '';
for (let i = 2; i < 2 + m; i++) {
  const [left, right] = input[i].split(' ').map(Number);
  answer += prefixSum[right] - prefixSum[left - 1] + '\n';
}

console.log(answer);