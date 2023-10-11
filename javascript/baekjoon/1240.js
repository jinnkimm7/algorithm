const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 0; i <= N; i++) graph.push([]);
for (let i = 1; i < N; i++) {
  const [x, y, cost] = input[i].split(' ').map(Number);

  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

for (let i = N; i < N + M; i++) {
  const [from, to] = input[i].split(' ').map(Number);

  const visited = new Array(N + 1).fill(false);
  const distance = new Array(N + 1).fill(0);
  function dfs(x, dist) {
    visited[x] = true;
    distance[x] = dist;

    for (let [y, cost] of graph[x]) {
      if (!visited[y]) dfs(y, dist + cost);
    }
  }

  dfs(from, 0);
  console.log(distance[to]);
}