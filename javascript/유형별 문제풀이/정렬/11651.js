// 실버 5
// https://www.acmicpc.net/problem/11651

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}
arr.sort((a, b) => {
  if (a[1] > b[1]) return 1;
  else if (a[1] < b[1]) return -1;
  else {
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
  }
})

console.log(arr.map(arr => arr.join(' ')).join('\n'));