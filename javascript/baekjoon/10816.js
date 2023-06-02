const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const N = Number(input[0]); // 상근이가 가지고 있는 숫자 카드의 개수
const arr1 = input[1].split(' ').map(v => Number(v));
const M = Number(input[2]);
const arr2 = input[3].split(' ').map(v => Number(v));

const map = new Map();
let answer = '';

for (let i = 0; i < arr1.length; i++) {
  const element = arr1[i];
  if (!map.has(element)) map.set(element, 1);
  else map.set(element, map.get(element) + 1);
}

for (let i = 0; i < arr2.length; i++) {
  const count = map.get(arr2[i]);
  if (count) answer += `${count} `;
  else answer += '0 ';
}

console.log(answer);