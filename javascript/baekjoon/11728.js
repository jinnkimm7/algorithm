const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const arrA = input[1].split(' ').map(Number);
const arrB = input[2].split(' ').map(Number);

console.log([...arrA, ...arrB].sort((a, b) => a - b).join(' '));