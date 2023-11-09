// 실버 1
// https://www.acmicpc.net/problem/1931

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const times = [];
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  times.push([x, y]);
}

times.sort((a, b) => {
  if (a[1] > b[1]) return 1;
  else if (a[1] < b[1]) return -1;
  else {
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
  }
})

let answer = 1;

let finishTime = times[0][1];
for (let i = 1; i < times.length; i++) {
  const startTime = times[i][0];
  if (startTime >= finishTime) {
    answer++;
    finishTime = times[i][1];
  }
}

console.log(answer);