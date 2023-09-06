const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]); // n: 컴퓨터의 수
const m = Number(input[1]); // m: 연결된 컴퓨터 쌍의 수

// 그래프 구현
const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 2; i < m + 2; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let answer = 0;
// dfs
const visited = new Array(n + 1).fill(false);
function dfs(x) {
  visited[x] = true;
  answer++;

  for (let y of graph[x]) {
    if (!visited[y]) dfs(y);
  }
}

dfs(1);
console.log(answer - 1);