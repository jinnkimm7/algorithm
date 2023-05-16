const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(v => parseInt(v));

// 방법 1
// const sorted = arr.sort((a, b) => a - b);
// console.log(sorted[0], sorted[sorted.length - 1]);

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) max = arr[i];
  if (min > arr[i]) min = arr[i];
}

console.log(min, max);

