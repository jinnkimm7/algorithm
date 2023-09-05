const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// n: 정점의수, m: 간선의 수, r: 시작 정점
const [n, m, r] = input[0].split(' ').map(Number);
const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
graph.map(node => node.sort((a, b) => a - b, 0));

const visited = new Array(n + 1).fill(0);

let rank = 1;
function dfs(start) {
  visited[start] = rank;
  rank++;

  for (let y of graph[start]) {
    if (!visited[y]) dfs(y);
  }
}

dfs(r);
const answer = visited.slice(1, visited.length);

console.log(answer.join('\n'));