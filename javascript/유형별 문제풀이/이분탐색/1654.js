// 실버 2
// https://www.acmicpc.net/problem/1654

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= k; i++) arr.push(Number(input[i]));

arr.sort((a, b) => a - b);

let start = 1;
let end = arr[arr.length - 1];

let answer = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let count = 0;
  for (let stick of arr) {
    count += parseInt(stick / mid);
  }

  if (count >= n) {
    start = mid + 1;
    answer = mid;
  }
  else end = mid - 1;
}

console.log(answer);