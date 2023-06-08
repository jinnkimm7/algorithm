const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const N = Number(input[0]);

const arr = [];
for (let i = 1; i <= N; i++) {
  const [age, name] = input[i].split(' ').map(v => !isNaN(v) ? Number(v) : v);
  arr.push([age, name]);
}

console.log(arr.sort((a, b) => a[0] - b[0]).map(arr => arr.join(' ')).join('\n'));