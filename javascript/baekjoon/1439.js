const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const S = input[0];

const zero = S.split('0').filter(el => el !== '');
const one = S.split('1').filter(el => el !== '');

console.log(Math.min(zero.length, one.length));