// 실버 2
// https://www.acmicpc.net/problem/2961

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const flavors = [];
for (let i = 1; i <= n; i++) {
  const [s, b] = input[i].split(' ').map(Number);
  flavors.push([s, b]);
}

const answer = [];
const selected = [];
const visited = new Array(n).fill(false);

for (let i = 1; i <= n; i++) {
  dfs(0, 0, i);
}

console.log(Math.min(...answer));

function dfs(depth, start, finish) {
  if (depth === finish) {
    let sumS = 1;
    let sumB = 0;
    for (let [s, b] of selected) {
      sumS *= s;
      sumB += b;
    }

    const result = sumS - sumB;
    answer.push(Math.abs(result));
    return;
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue;

    selected.push(flavors[i]);
    visited[i] = true;
    dfs(depth + 1, i + 1, finish);
    selected.pop();
    visited[i] = false;
  }
}