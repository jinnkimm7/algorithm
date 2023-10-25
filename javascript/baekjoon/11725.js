const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i < n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const visited = new Array(n + 1).fill(0);

function bfs(start) {
  const queue = [start];
  visited[start] = 1;

  while (queue.length !== 0) {
    const now = queue.shift();

    for (let next of graph[now]) {
      if (visited[next] === 0) {
        queue.push(next);
        visited[next] = now;
      }
    }
  }
}

bfs(1);

console.log(visited.slice(2).join('\n'));