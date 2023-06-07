const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const word = input[0];
const reversed = word.split('').reverse().join('');

console.log(word === reversed ? 1 : 0);