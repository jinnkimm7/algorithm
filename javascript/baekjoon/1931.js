const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const times = [];
for (let i = 1; i <= n; i++) {
  const data = input[i].split(' ').map(Number);
  times.push(data);
}

times.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else if (a[0] !== b[0]) return a[0] - b[0];
});

let answer = 0;
let prev = 0;
for (let i = 0; i < times.length; i++) {
  const start = times[i][0];
  if (prev <= start) {
    answer++;
    prev = times[i][1];
  }
}

console.log(answer);