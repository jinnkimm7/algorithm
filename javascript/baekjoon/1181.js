const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const temp = [];

for (let i = 1; i <= n; i++) {
  temp.push(input[i]);
}

const arr = [...new Set([...temp])];

arr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  }
});

console.log(arr.join('\n'));