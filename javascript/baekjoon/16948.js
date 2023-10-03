const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const N = Number(input[0]);

const [startX, startY, targetX, targetY] = input[1].split(' ').map(Number);
const graph = [];
for (let i = 0; i < N; i++) graph.push(new Array(N).fill(0));

function bfs(startX, startY) {
  const queue = [[startX, startY]];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    // 데스 나이트가 이동할 수 있는 경로
    const dx = [-2, -2, 0, 0, 2, 2];
    const dy = [-1, 1, -2, 2, -1, 1];

    for (let i = 0; i < 6; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      // 경로를 벗어나는 경우, pass
      if (nx >= N || nx <= -1 || ny >= N || ny <= -1) continue;

      if (graph[nx][ny] === 0) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

bfs(startX, startY);
console.log(graph[targetX][targetY] === 0 ? -1 : graph[targetX][targetY]);
