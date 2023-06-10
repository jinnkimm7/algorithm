const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const distances = input[1].split(' ').map(Number);
const costs = input[2].split(' ').map(Number);

let minCost = costs[0];
for (let i = 0; i < costs.length; i++) {
  minCost = Math.min(minCost, costs[i]);
  costs[i] = minCost;
}

let answer = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  answer += BigInt(costs[i]) * BigInt(distances[i]);
}

console.log(String(answer));