const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const map = new Map();
const arr = [];

for (let i = 1; i <= n; i++) {
  map.set(input[i], i);
  arr.push(input[i]);
}

let answer = '';

for (let i = n + 1; i <= n + m; i++) {
  const quiz = input[i];
  if (map.has(quiz)) answer += map.get(quiz) + '\n';
  else answer += arr[quiz - 1] + '\n';
}

console.log(answer);