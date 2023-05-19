const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numbers = input[1].split('').map(number => parseInt(number));

console.log(numbers.reduce((a, b) => a + b, 0));