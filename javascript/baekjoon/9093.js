const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCases = Number(input[0]);

for (let i = 1; i <= testCases; i++) {
  const arr = input[i].split(' ')
    .map(value => value.split(''))
    .map(arr => arr.reverse())
    .map(arr => arr.join(''))
    .join(' ');

  console.log(arr);
}