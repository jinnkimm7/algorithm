const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split('').map(Number));

function dfs(x, y, n, graph) {
  // 탐색 범위를 벗어날 경우,
  if (x >= n || x <= -1 || y >= n || y <= -1) return 0;
  // 벽일 경우, 함수종료
  if (graph[x][y] === 0) return 0;

  // 집일 경우 상하좌를 탐색한다.
  if (graph[x][y] === 1) {
    graph[x][y] = -1; // 방문처리한다.
    let count = 1;

    count += dfs(x - 1, y, n, graph);
    count += dfs(x + 1, y, n, graph);
    count += dfs(x, y - 1, n, graph);
    count += dfs(x, y + 1, n, graph);
    return count;
  }
  return 0;
}


let answer = [];
for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= n; j++) {
    const value = dfs(i, j, n, graph);
    if (value > 0) {
      answer.push(value);
    }
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length + '\n' + answer.join('\n'));