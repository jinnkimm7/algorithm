const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, l, r] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(' ').map(Number));

// 이동할 수 있는 위치
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let answer = 0;

while (true) {
  let flag = false;
  const visited = Array.from(Array(n), () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        const queue = [[i, j]];
        const visitedRecord = [[i, j]];
        let count = 1;
        let population = graph[i][j];
        visited[i][j] = true;

        while (queue.length !== 0) {
          const [x, y] = queue.shift();

          for (let k = 0; k < 4; k++) {
            const [nx, ny] = [x + dx[k], y + dy[k]];

            if (nx < n && nx > -1 && ny < n && ny > -1) {
              const diff = Math.abs(graph[nx][ny] - graph[x][y]);
              if (l <= diff && diff <= r && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                visitedRecord.push([nx, ny]);
                count++;
                population += graph[nx][ny];
                flag = true;
              }
            }
          }
        }

        const movedPopulation = parseInt(population / count);

        for (let [x, y] of visitedRecord) {
          graph[x][y] = movedPopulation;
        }
      }
    }
  }

  if (!flag) break;
  answer += 1;
}

console.log(answer);