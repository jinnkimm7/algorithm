// 실버 3
// https://www.acmicpc.net/problem/13305

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const dists = input[1].split(' ').map(Number);
const costs = input[2].split(' ').map(Number);

const data = [];

for (let i = 0; i < costs.length; i++) {
  data.push([dists[i], costs[i]]);
}

const minCost = Math.min(...costs.slice(0, n - 1));
let midMinCost = 1e9;
let totalDist = dists.reduce((a, c) => a + c, 0);

let answer = BigInt(0);
for (let [dist, cost] of data) {
  if (cost === minCost) {
    answer += BigInt(totalDist) * BigInt(cost);
    break;
  } else {
    midMinCost = Math.min(midMinCost, cost);
    answer += BigInt(dist) * BigInt(midMinCost);
    totalDist -= dist;
  }
}

console.log(String(answer));