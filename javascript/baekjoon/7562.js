const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const testCases = Number(input[0]);
for (let tc = 1; tc < testCases * 3; tc += 3) {
  const l = Number(input[tc]);

  const [startX, startY] = input[tc + 1].split(' ').map(Number);
  const [targetX, targetY] = input[tc + 2].split(' ').map(Number);

  const graph = [];
  for (let i = 0; i < l; i++) graph.push(new Array(l).fill(0));

  function bfs(startX, startY, graph) {
    const queue = [[startX, startY]];
    graph[startX][startY] = 1; // 방문처리

    // 나이트의 이동경로
    const dx = [-1, -2, -2, -1, 1, 2, 1, 2];
    const dy = [2, 1, -1, -2, 2, 1, -2, -1];
    while (queue.length !== 0) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 8; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        // 경로를 벗어나면, pass
        if (nx >= l || nx <= -1 || ny >= l || ny <= -1) continue;
        // 방문한적이 없다면, 탐색
        if (graph[nx][ny] === 0) {
          graph[nx][ny] = graph[x][y] + 1; // 방문처리
          queue.push([nx, ny]);
        }
      }
    }
  }

  bfs(startX, startY, graph);
  console.log(graph[targetX][targetY] - 1);
}