const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const number = parseInt(input[0]);
let answer = '';

for (let i = 1; i <= number; i++) {
  const data = input[i].split(' ').map(v => parseInt(v));
  const a = data[0];
  const b = data[1];

  answer += a + b + '\n';
}

console.log(answer);