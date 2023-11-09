// 실버 5
// https://www.acmicpc.net/problem/1181

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const set = new Set();
for (let i = 1; i <= n; i++) {
  set.add(input[i]);
}

const arr = [...set];
arr.sort((a, b) => {
  if (a.length > b.length) return 1;
  else if (a.length < b.length) return -1;
  else {
    if (a > b) return 1;
    else if (a < b) return -1;
  }
})

console.log(arr.join('\n'));