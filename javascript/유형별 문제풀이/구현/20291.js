// 실버 3
// https://www.acmicpc.net/problem/20291

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const map = new Map();
for (let i = 1; i <= n; i++) {
  const [name, extension] = input[i].split('.');
  if (!map.get(extension)) {
    map.set(extension, 1);
  } else {
    map.set(extension, map.get(extension) + 1);
  }
}

const arr = [...map];
arr.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  else if (a[0] < b[0]) return -1;
})

let answer = '';
arr.forEach((file) => {
  answer += file.join(' ') + '\n';
})
console.log(answer);