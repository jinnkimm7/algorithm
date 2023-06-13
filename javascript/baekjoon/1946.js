const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const testCases = Number(input[0]);
let line = 1;
for (let tc = 0; tc < testCases; tc++) {
  const candidateCount = Number(input[line]);
  const ranks = [];

  for (let i = line + 1; i <= line + candidateCount; i++) {
    const data = input[i].split(' ').map(Number);
    ranks.push(data);
  }
  ranks.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let minValue = 100001;
  for (let [a, b] of ranks) {
    if (b < minValue) {
      minValue = b;
      count++;
    }
  }
  console.log(count);
  line += candidateCount + 1;
}