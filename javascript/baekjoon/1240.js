const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// 노드의 개수 N, 알고싶은 노드쌍의 개수 M
const [n, m] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i < n; i++) {
  const [x, y, cost] = input[i].split(' ').map(Number);

  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

for (let i = n; i < n + m; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  const visited = new Array(n + 1).fill(false);
  const distance = new Array(n + 1).fill(-1);

  function dfs(x, dist) {
    visited[x] = true;
    distance[x] = dist;

    for (let [y, cost] of graph[x]) {
      if (!visited[y]) dfs(y, dist + cost)
    };
  }

  dfs(x, 0);
  console.log(distance[y]);
}