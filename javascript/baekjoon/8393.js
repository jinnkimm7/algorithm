const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const givenNumber = parseInt(input[0]);

let sum = 0;

for (let i = 1; i <= givenNumber; i++) {
  sum += i;
}

console.log(sum);