const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const arrN = input[1].split(' ').map(Number);
arrN.sort((a, b) => a - b);
const m = Number(input[2]);
const arrM = input[3].split(' ').map(Number);

// set으로 풀기
// const set = new Set([...arrN]);

// let answer = '';
// for (let i = 0; i < m; i++) {
//   if (set.has(arrM[i])) answer += '1\n';
//   else answer += '0\n';
// }

// console.log(answer);

// 이진탐색으로 풀기

function binarySearch(arr, target, start, end) {
  if (start > end) return -1;
  let mid = parseInt((start + end) / 2);
  if (target === arr[mid]) return mid;
  else if (target > arr[mid]) return binarySearch(arr, target, mid + 1, end);
  else return binarySearch(arr, target, start, mid - 1);
}

let answer = '';
for (let i = 0; i < m; i++) binarySearch(arrN, arrM[i], 0, n - 1) === -1 ? answer += '0\n' : answer += '1\n';
console.log(answer);