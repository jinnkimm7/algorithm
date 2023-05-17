const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(parseInt(input[i]));
};

let max = 0;
let index = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    index = i;
  }
}

console.log(max);
console.log(index + 1);