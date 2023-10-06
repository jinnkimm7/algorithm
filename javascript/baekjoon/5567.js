const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const l = Number(input[1]);

const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);

const dist = new Array(l + 1).fill(-1);

for (let i = 2; i <= l + 1; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function bfs() {
  const queue = [1];
  dist[1] = 0;

  while (queue.length !== 0) {
    const from = queue.shift();

    for (let to of graph[from]) {
      if (dist[to] === -1) {
        dist[to] = dist[from] + 1;
        queue.push(to);
      }
    }
  }
}

bfs();

let answer = 0;
for (let i = 1; i < dist.length; i++) {
  if (dist[i] === 1 || dist[i] === 2) answer++;
}

console.log(answer);