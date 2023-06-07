const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const A = new Set(input[1].split(' ').map(v => Number(v)));
const B = new Set(input[2].split(' ').map(v => Number(v)));

const x = new Set([...A].filter(v => !B.has(v)));
const y = new Set([...B].filter(v => !A.has(v)));

console.log(x.size + y.size);