const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const groups = input[0].split('-');
const values = groups
  .map(group => group.split('+').map(group => Number(group)))
  .map(group => group.reduce((a, b) => a + b, 0));

let answer = 0;

for (let i = 0; i < values.length; i++) {
  if (i === 0) answer += values[i];
  else answer -= values[i];
}

console.log(answer);