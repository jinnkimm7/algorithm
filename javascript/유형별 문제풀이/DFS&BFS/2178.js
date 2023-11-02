// 실버 1 
// https://www.acmicpc.net/problem/2178

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const grpah = [];
for (let i = 1; i <= n; i++) {
  grpah.push(input[i].split('').map(Number));
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const queue = [[0, 0]];

while (queue.length !== 0) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (nx >= n || nx <= -1 || ny >= m || ny <= -1) continue;
    if (grpah[nx][ny] === 0) continue;

    if (grpah[nx][ny] === 1) {
      grpah[nx][ny] = grpah[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

console.log(grpah[n - 1][m - 1]);