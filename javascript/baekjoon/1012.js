const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

function dfs(graph, n, m, x, y) {
  // 범위를 벗어나면 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  if (graph[x][y] === 1) {
    // 해당 노드를 방문 처리한다.
    graph[x][y] = -1;
    // 상하좌우 위치를 모두 재귀적으로 호출한다.
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  return false;
}

let testCases = Number(input[0]);
let line = 1;

while (testCases--) {
  // m: 가로, n: 세로, k: 배추가 심어져있는 위치의 개수
  const [m, n, k] = input[line].split(' ').map(v => Number(v));
  const graph = [];
  // 그래프를 0으로 채우기
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m).fill(0);
  }

  for (let i = 1; i <= k; i++) {
    const [y, x] = input[i + line].split(' ').map(v => Number(v));
    graph[x][y] = 1;
  }

  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++;
    }
  }

  line += k + 1; // 다음 테스트 케이스로 이동
  console.log(answer);
}