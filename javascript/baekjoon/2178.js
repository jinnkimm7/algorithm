const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split('').map(Number));
}

function bfs(startX, startY) {
  const queue = [];
  queue.push([startX, startY]);

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      // 범위를 벗어나는 경우,
      if (nx >= n || nx <= -1 || ny >= m || ny <= -1) continue;
      // 벽인 경우,
      if (graph[nx][ny] === 0) continue;
      // 갈 수 있는 경우
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

bfs(0, 0);
console.log(graph[n - 1][m - 1]);
