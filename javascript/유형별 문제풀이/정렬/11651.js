// 실버 5
// https://www.acmicpc.net/problem/11651

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const coords = [];
for (let i = 1; i <= n; i++) {
  coords.push(input[i].split(' ').map(el => Number(el)));
}

coords.sort((a, b) => {
  if(a[1] > b[1]) return 1;
  else if(a[1] < b[1]) return -1;
  else {
    if(a[0] > b[0]) return 1;
    else if(a[0] < b[0]) return -1;
  }
});

let answer = "";
for (let coord of coords) {
  const [x, y] = coord;
  answer += x + " " + y + "\n";
}

console.log(answer);