const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const N = Number(input[0]);
const cards = input[1].split(' ').map(v => Number(v));
const M = Number(input[2]);
const arr = input[3].split(' ').map(v => Number(v));

const map = new Map();

let answer = '';

for (let i = 0; i < cards.length; i++) {
  map.set(cards[i], 1);
}

for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) answer += '1 ';
  else answer += '0 ';
}

console.log(answer);