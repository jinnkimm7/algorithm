const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m, r] = input[0].split(' ').map(v => Number(v));
const graph = [];
for (let i = 0; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(' ').map(v => Number(v));
  graph[x].push(y);
  graph[y].push(x);
}

graph.map(node => node.sort((a, b) => a - b, 0));

const visited = new Array(n + 1).fill(0);

let rank = 1;
function dfs(x) {
  visited[x] = rank;
  rank++;
  for (y of graph[x]) if (!visited[y]) {
    dfs(y);
  }
}

dfs(r);

const answer = visited.slice(1, n + 1).join('\n');
console.log(answer);