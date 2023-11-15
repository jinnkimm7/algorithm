// 골드 5
// https://www.acmicpc.net/problem/11000

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const objArr = [];

for (let i = 1; i <= n; i++) {
  const [s, t] = input[i].split(' ').map(Number);
  objArr.push({ time: s, start: 1 });
  objArr.push({ time: t, start: -1 });
}

objArr.sort((a, b) => {
  if (a.time > b.time) return 1;
  else if (a.time < b.time) return -1;
  else {
    if (a.start > b.start) return 1;
    else return -1;
  }
});

let answer = 0;
let count = 0;
objArr.forEach(schedule => {
  if (schedule.start === 1) {
    count += 1;
  } else {
    count -= 1;
  }

  answer = Math.max(answer, count);
})

console.log(answer);