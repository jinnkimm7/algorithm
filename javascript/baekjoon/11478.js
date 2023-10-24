const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const s = input[0];

const set = new Set();

for (let i = 0; i <= s.length; i++) {
  for (let j = i; j <= s.length; j++) {
    if (i === j) continue;
    set.add(s.slice(i, j));
  }
}

console.log(set.size);