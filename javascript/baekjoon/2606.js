const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// n = 컴퓨터의 수, m = 연결된 수
const n = Number(input[0]);
const m = Number(input[1]);

const graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  const [x, y] = input[i].split(' ').map(v => Number(v));
  graph[x].push(y);
  graph[y].push(x);
}

const visited = new Array(n + 1).fill(false);
let count = 0;

function dfs(x) {
  visited[x] = true;
  count++;
  for (y of graph[x]) if (!visited[y]) dfs(y);
}

dfs(1);
console.log(count - 1);