const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const graph = [0];
for (let i = 1; i <= n; i++) graph.push(Number(input[i]));
const visited = new Array(n + 1).fill(false);
const finished = new Array(n + 1).fill(false);
const result = [];

function dfs(start) {
  visited[start] = true;
  let next = graph[start];
  if (!visited[next]) {
    dfs(next);
  } else if (!finished[next]) {
    while (next !== start) {
      result.push(next);
      next = graph[next];
    }
    result.push(start);
  }
  finished[start] = true;
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) dfs(i);
}

console.log(result.sort((a, b) => a - b).length);
console.log(result.join('\n'));