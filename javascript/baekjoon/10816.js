const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// set으로 풀기

// const N = Number(input[0]);
// const cards1 = input[1].split(' ').map(Number);

// const map = new Map();

// for (let i = 0; i < N; i++) {
//   const num = cards1[i];
//   if (map.has(num)) {
//     map.set(num, map.get(num) + 1);
//   } else {
//     map.set(num, 1);
//   }
// }

// const M = Number(input[2]);
// const cards2 = input[3].split(' ').map(Number);

// let answer = '';

// for (let i = 0; i < M; i++) {
//   const card = cards2[i];

//   if (!map.has(card)) answer += '0 ';
//   else answer += `${map.get(card)} `;
// }

// console.log(answer);

// 이분탐색으로 풀기
const N = Number(input[0]);
const cards1 = input[1].split(' ').map(Number);
const M = Number(input[2]);
const cards2 = input[3].split(' ').map(Number);

cards1.sort((a, b) => a - b);

let answer = '';
for (let i = 0; i < cards2.length; i++) {
  const card = cards2[i];
  const count = countByRange(cards1, card, card);
  answer += count + ' ';
}
console.log(answer);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  const leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  const rightIndex = upperBound(arr, rightValue, 0, arr.length);
  return rightIndex - leftIndex;
}