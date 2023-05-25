const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const line = input[1].split(' ').map(v => Number(v));

const sorted = line.sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < sorted.length; i++) {
  const temp = sorted.slice(0, i + 1);
  answer += temp.reduce((a, b) => a + b, 0);
}

console.log(answer);