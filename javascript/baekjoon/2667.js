const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]); // 지도의 크기

const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split('').map(v => Number(v)));
}

let count = 0;
const apartments = [];

function dfs(graph, n, x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return false;
  if (graph[x][y] === 1) {
    count++;
    graph[x][y] = -1;
    dfs(graph, n, x - 1, y);
    dfs(graph, n, x + 1, y);
    dfs(graph, n, x, y - 1);
    dfs(graph, n, x, y + 1);
    return true;
  }
  return false;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(graph, n, i, j)) {
      apartments.push(count);
      count = 0;
    }
  }
}

apartments.sort((a, b) => a - b, 0);
console.log(apartments.length);
console.log(apartments.join('\n'));