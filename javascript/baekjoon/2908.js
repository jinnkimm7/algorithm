const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ');

a = a.split('').reverse().join('');
b = b.split('').reverse().join('');

console.log(Math.max(Number(a), Number(b)));