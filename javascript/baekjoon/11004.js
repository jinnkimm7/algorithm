const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, k] = input[0].split(' ').map(v => Number(v));
const arr = input[1].split(' ').map(v => Number(v)).sort((a, b) => a - b, 0);

console.log(arr[k - 1]);