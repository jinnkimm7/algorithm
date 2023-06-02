const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [N, M] = input[0].split(' ').map(v => Number(v));

const S = new Map();
let answer = 0;

for (let i = 1; i <= N; i++) {
  S.set(input[i]);
}

for (let i = N + 1; i <= N + M; i++) {
  if (S.has(input[i])) answer++;
}

console.log(answer);