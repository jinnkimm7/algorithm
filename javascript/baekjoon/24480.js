const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// N: 정점의 수, M: 간선의 수, R: 시작 정점
const [N, M, R] = input[0].split(' ').map(v => Number(v));

const graph = [];
for (let i = 0; i <= N; i++) graph[i] = [];
for (let i = 1; i <= M; i++) {
  const [x, y] = input[i].split(' ').map(v => Number(v));
  graph[x].push(y);
  graph[y].push(x);
}
graph.map(node => node.sort((a, b) => b - a, 0));

const visited = new Array(N + 1).fill(0);

let rank = 1;
function dfs(x) {
  visited[x] = rank;
  rank++;
  for (y of graph[x]) {
    if (visited[y] === 0) dfs(y);
  }
}

dfs(R);

const answer = visited.slice(1, N + 1).join('\n');
console.log(answer);