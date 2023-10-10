const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [N, K] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 1; i <= N; i++) graph.push(input[i].split(' ').map(Number));

// 초기 바이러스정보 가져오기
const viruses = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // 바이러스가 존재할 경우, 바이러스의 종류, 시간, 위치를 넣어준다.
    if (graph[i][j] !== 0) viruses.push([graph[i][j], 0, i, j]);
  }
}

// 낮은 바이러스가 먼저 증식하기 때문에 정렬해준다.
viruses.sort((a, b) => a[0] - b[0]);

const queue = [];
for (let virus of viruses) {
  queue.push(virus);
}

let [targetS, targetX, targetY] = input[N + 1].split(' ').map(Number);

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

// BFS 진행
while (queue.length !== 0) {
  const [virus, s, x, y] = queue.shift();
  if (s === targetS) break;

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (nx >= N || nx <= -1 || ny >= N || ny <= -1) continue;
    if (graph[nx][ny] === 0) {
      graph[nx][ny] = virus;
      queue.push([virus, s + 1, nx, ny]);
    }
  }
}

console.log(graph[targetX - 1][targetY - 1]);