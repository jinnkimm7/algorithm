const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const students = new Array(30).fill(false);

for (let i = 0; i < 28; i++) {
  students[input[i] - 1] = true;
}

const answer = [];
students.forEach((v, i) => v === false ? answer.push(i + 1) : undefined);
students.sort((a, b) => a - b);

console.log(answer.join('\n'));