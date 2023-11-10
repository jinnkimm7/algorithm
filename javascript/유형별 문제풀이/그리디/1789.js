// 실버 5
// https://www.acmicpc.net/problem/1789

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const s = Number(input[0]);

let sum = 0;

let answer = 0;
while (sum <= s) {
  answer++;
  sum += answer;
}

console.log(answer - 1);