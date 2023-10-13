const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(''));

const colorBlindGraph = [];
for (let i = 1; i <= n; i++) colorBlindGraph.push(input[i].split(''));
// R과 G에 같은색상인 @를 할당한다
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (colorBlindGraph[i][j] === 'R' || colorBlindGraph[i][j] === 'G') colorBlindGraph[i][j] = '@';
  }
}

function dfs(x, y, n, color, graph) {
  // 범위를 넘어가고
  if (x >= n || x <= -1 || y >= n || y <= -1) return false;
  // 이미 탐색했다면 함수 종료
  if (graph[x][y] === -1) return false;

  if (graph[x][y] === color) {
    // 색깔이라면, 방문처리 후,
    graph[x][y] = -1

    // 상하좌우탐색
    dfs(x + 1, y, n, color, graph);
    dfs(x - 1, y, n, color, graph);
    dfs(x, y + 1, n, color, graph);
    dfs(x, y - 1, n, color, graph);

    return true;
  }
}

let count = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 'R' || graph[i][j] === 'G' || graph[i][j] === 'B') {
      const color = graph[i][j];
      if (dfs(i, j, n, color, graph)) {
        count++;
      }
    }
  }
}

let colorBlindCount = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const color = colorBlindGraph[i][j];

    if (dfs(i, j, n, color, colorBlindGraph)) colorBlindCount++;
  }
}

let answer = count + ' ' + colorBlindCount;
console.log(answer);