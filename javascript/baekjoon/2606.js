const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]); // 컴퓨터의 수
const m = Number(input[1]); // 연결되어 있는 컴퓨터의 수 

const graph = [];
for (let i = 0; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  const [x, y] = input[i].split(' ').map(v => Number(v));
  graph[x].push(y);
  graph[y].push(x);
}

let answer = 0;

const visited = new Array(n + 1).fill(false);

function dfs(x) {
  visited[x] = true;
  answer++;

  for (y of graph[x]) {
    if (!visited[y]) dfs(y);
  }
}

dfs(1);
console.log(answer - 1);