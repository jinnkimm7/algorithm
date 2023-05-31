const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const arr = input[0].split(' ').map(v => Number(v));
arr.sort((a, b) => a - b, 0);

console.log(arr.join('\n'));