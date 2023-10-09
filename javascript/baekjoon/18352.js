const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// 도시의개수 X, 도로의 개수 M, 거리정보 K, 출발도시의 정보 X
const [N, M, K, X] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 1; i <= N; i++) graph[i] = [];
for (let i = 1; i <= M; i++) {
  const [x, y] = input[i].split(' ').map(Number);

  graph[x].push(y);
}

const dist = new Array(N + 1).fill(-1);

function bfs(start) {
  const queue = [start];
  dist[start] = 1;

  while (queue.length !== 0) {
    const current = queue.shift();
    if (dist[current] === K + 1) continue;

    for (let next of graph[current]) {
      if (dist[next] === -1) {
        dist[next] = dist[current] + 1;
        queue.push(next);
      }
    }
  }
}

bfs(X);

let check = false;
for (let i = 1; i < dist.length; i++) {
  if (dist[i] - 1 === K) {
    console.log(i);
    check = true;
  }
}

if (!check) console.log(-1);