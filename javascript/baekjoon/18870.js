const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const Xi = input[1].split(' ').map(Number);
const coordinateX = [...new Set(Xi)].sort((a, b) => a - b);

const map = new Map();
for (let i = 0; i < coordinateX.length; i++) {
  map.set(coordinateX[i], i);
}

let answer = '';

for (const x of Xi) {
  answer += `${map.get(x)} `;
}

console.log(answer);