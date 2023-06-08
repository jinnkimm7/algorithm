const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const arr = input[0].split('').map(Number);
console.log(arr.sort((a, b) => b - a).join(''));