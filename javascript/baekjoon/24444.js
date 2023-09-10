const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m, r] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
graph.map(node => node.sort((a, b) => a - b));

const visited = new Array(n + 1).fill(0);
let rank = 1;
function bfs(start) {
  const queue = [];
  queue.push(start);

  visited[start] = rank;

  while (queue.length !== 0) {
    const value = queue.shift();

    for (let i of graph[value]) {
      if (visited[i] === 0) {
        queue.push(i);
        rank++;
        visited[i] = rank;
      }
    }
  }
}

bfs(r);
console.log(visited.slice(1, visited.length).join('\n'));