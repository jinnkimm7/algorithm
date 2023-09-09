const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const MAX = 100001;
const [n, k] = input[0].split(' ').map(Number);
const visited = new Array(MAX).fill(0);

function bfs() {
  const queue = [];
  queue.push(n);

  while (queue.length !== 0) {
    const current = queue.shift();
    if (current === k) {
      return visited[current];
    }
    for (let next of [current - 1, current + 1, current * 2]) {
      if (next < 0 || next >= MAX) continue;
      if (visited[next] === 0) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      }
    }
  }
}

console.log(bfs());