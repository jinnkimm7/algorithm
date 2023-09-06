const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

function dfs(x, y, m, n, graph) {
  if (x >= m || x <= -1 || y >= n || y <= -1) {
    return false;
  }
  if (graph[y][x] === 1) {
    graph[y][x] = -1;
    dfs(x - 1, y, m, n, graph);
    dfs(x + 1, y, m, n, graph);
    dfs(x, y - 1, m, n, graph);
    dfs(x, y + 1, m, n, graph);
    return true;
  }
  return false;
}

const testCases = Number(input[0]);
let line = 1;
for (let tc = 0; tc < testCases; tc++) {
  // m: 가로, n: 세로, k: 배추 심어져 있는 위치
  const [m, n, k] = input[line].split(' ').map(Number);

  let answer = 0;
  // 그래프 구현
  const graph = [];
  for (let i = 0; i < n; i++) graph.push(new Array(m).fill(0));
  for (let i = 1; i <= k; i++) {
    const [x, y] = input[i + line].split(' ').map(Number);
    graph[y][x] = 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(j, i, m, n, graph)) answer++;
    }
  }
  console.log(answer);
  line += k + 1;
}