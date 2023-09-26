const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const N = Number(input[0]);
const cards1 = input[1].split(' ').map(Number);

const map = new Map();

for (let i = 0; i < N; i++) {
  const num = cards1[i];
  if (map.has(num)) {
    map.set(num, map.get(num) + 1);
  } else {
    map.set(num, 1);
  }
}

const M = Number(input[2]);
const cards2 = input[3].split(' ').map(Number);

let answer = '';

for (let i = 0; i < M; i++) {
  const card = cards2[i];

  if (!map.has(card)) answer += '0 ';
  else answer += `${map.get(card)} `;
}

console.log(answer);