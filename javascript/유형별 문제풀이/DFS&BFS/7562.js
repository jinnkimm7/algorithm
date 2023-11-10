// 실버 1
// https://www.acmicpc.net/problem/7562

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let tc = Number(input[0]);

let line = 1;
while (tc--) {
  const l = Number(input[line]);
  const [startX, startY] = input[line + 1].split(' ').map(Number);
  const [targetX, targetY] = input[line + 2].split(' ').map(Number);

  const graph = [];
  for (let i = 0; i < l; i++) graph.push(new Array(l).fill(0));

  // 나이트가 이동할 수 있는 경로의 경우
  const dx = [-2, -1, 2, 1, -2, -1, 2, 1];
  const dy = [1, 2, 1, 2, -1, -2, -1, -2];

  const queue = [];
  queue.push([startX, startY]);
  while (queue.length !== 0) {
    const [currentX, currentY] = queue.shift();

    for (let i = 0; i < 8; i++) {
      const [nextX, nextY] = [currentX + dx[i], currentY + dy[i]];

      if (nextX >= l || nextX <= -1 || nextY >= l || nextY <= -1) continue;
      if (graph[nextX][nextY] !== 0) continue;

      if (graph[nextX][nextY] === 0) {
        graph[nextX][nextY] = graph[currentX][currentY] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }

  if (startX === targetX && startY === targetY) {
    console.log(0);
  } else {
    console.log(graph[targetX][targetY]);
  }

  line += 3;
}