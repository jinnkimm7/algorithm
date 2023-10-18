const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(' ').map(Number));

// 이동할수 있는 방향
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  const visited = [];
  for (let i = 0; i < n; i++) visited.push(new Array(m).fill(false));

  visited[0][0] = true;
  const queue = [[0, 0]];

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      // 경로를 벗어나는 경우 무시
      if (nx >= n || nx <= -1 || ny >= m || ny <= -1) continue;
      if (!visited[nx][ny]) {
        if (graph[nx][ny] >= 1) {
          graph[nx][ny] += 1;
        } else {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
}

function melt() {
  let finish = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] >= 3) {
        graph[i][j] = 0;
        finish = false;
      } else if (graph[i][j] === 2) graph[i][j] = 1;
    }
  }
  return finish;
}

let answer = 0;

while (true) {
  bfs();
  if (melt()) {
    console.log(answer);
    break;
  } else {
    answer += 1;
  }
}