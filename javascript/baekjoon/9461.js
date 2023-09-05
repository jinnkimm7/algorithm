const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const testCases = Number(input[0]);

for (let i = 1; i <= testCases; i++) {
  const n = Number(input[i]);
  const p = [0, 1, 1, 1, 2, 2];

  if (n < 5) {
    console.log(p[n]);
  } else {
    for (let j = 5; j <= n; j++) {
      p[j] = p[p.length - 1] + p[j - 5];
    }
    console.log(p[n]);
  }
}