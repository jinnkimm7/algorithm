const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const N = Number(input[0]);
const students = [];

for (let i = 1; i <= N; i++) {
  students.push(input[i].split(' ').map(value => isNaN(value) ? value : Number(value)));
}

students.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];
  else if (a[2] !== b[2]) return a[2] - b[2];
  else if (a[3] !== b[3]) return b[3] - a[3];
  else if (a[0] > b[0]) return 1;
  else if (a[0] < b[0]) return -1;
  else return 0;
});

const answer = [];

for (let i = 0; i < N; i++) {
  answer.push(students[i][0]);
}

console.log(answer.join('\n'));