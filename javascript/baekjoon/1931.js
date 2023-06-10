const { time } = require('console');
const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const testCases = Number(input[0]);
console.log(testCases);

const times = [];
for (let tc = 1; tc <= testCases; tc++) {
  const data = input[tc].split(' ').map(Number);
  times.push(data);
}
times.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else if (a[0] !== b[0]) return a[0] - b[0];
});

console.log(times);