// 실버 2
// https://www.acmicpc.net/problem/1260

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m, v] = input[0].split(' ').map(Number);

const graph = [];

for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

graph.map(node => node.sort((a, b) => a - b));

let visited = new Array(n + 1).fill(false);
let answer = [];

dfs(v);
console.log(answer.join(' '));

visited = new Array(n + 1).fill(false);
answer = [];

bfs(v);
console.log(answer.join(' '));

// DFS
function dfs(start) {
  visited[start] = true;
  answer.push(start);

  for (let next of graph[start]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

// BFS
function bfs(start) {
  const queue = [start];
  visited[start] = true;
  answer.push(start);

  while (queue.length !== 0) {
    const cur = queue.shift();
    for (let next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        answer.push(next);
        queue.push(next);
      }
    }
  }
}