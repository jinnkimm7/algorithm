// 실버 2
// https://www.acmicpc.net/problem/2805

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

let start = 1;
let end = arr[arr.length - 1];

let answer = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let meter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) meter += arr[i] - mid;
  }

  if (meter >= m) {
    start = mid + 1;
    answer = mid;
  } else {
    end = mid - 1;
  }
}

console.log(answer);