const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const number = Number(input[0]);
const arr = input[1].split(' ').map(v => Number(v));
const v = Number(input[2]);

let count = 0;

arr.map(ele => ele === v ? count++ : null);

console.log(count);