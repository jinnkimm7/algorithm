// 실버 2
// https://www.acmicpc.net/problem/2644

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const [from, to] = input[1].split(' ').map(Number);
const m = Number(input[2]);
const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 3; i < m + 3; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const dist = new Array(n + 1).fill(0);

const queue = [from];
dist[from] = 1;

while (queue.length !== 0) {
  const now = queue.shift();
  for (let next of graph[now]) {
    if (dist[next] === 0) {
      dist[next] = dist[now] + 1;
      queue.push(next);
    }
  }
}

console.log(dist[to] === 0 ? -1 : dist[to] - 1);