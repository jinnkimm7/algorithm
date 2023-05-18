const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numbers = input.map(number => parseInt(number));
const mySet = new Set();

for (let i = 0; i < 10; i++) {
  mySet.add(numbers[i] % 42);
}

console.log(mySet.size);