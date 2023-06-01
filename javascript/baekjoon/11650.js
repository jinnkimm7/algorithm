const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(v => Number(v));
  arr.push([x, y]);
}

arr
  .sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  })


console.log(arr.map(arr => arr.join(' ')).join('\n'));