const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 1; i <= N; i++) graph.push(input[i].split('').map(Number));

function bfs() {
  const queue = [[0, 0]];

  // 이동할 수 있는 방향: 상하좌우
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      // 1. 범위를 벗어난 경우, pass
      if (nx >= N || nx <= -1 || ny >= M || ny <= -1) continue;
      // 2. 0(벽)인 경우, pass
      if (graph[nx][ny] === 0) continue;

      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

bfs();
console.log(graph[N - 1][M - 1]);