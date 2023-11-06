// 실버 1
// https://www.acmicpc.net/problem/2667

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split('').map(Number));

let answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const count = dfs(i, j, n, graph);
    if (count > 0) answer.push(count);
  }
}
answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join('\n'));

function dfs(x, y, n, graph) {
  if (x >= n || x <= -1 || y >= n || y <= -1) return 0;
  if (graph[x][y] === 0) return 0;
  if (graph[x][y] === 1) {
    graph[x][y] = -1;

    let count = 1;
    count += dfs(x + 1, y, n, graph);
    count += dfs(x - 1, y, n, graph);
    count += dfs(x, y + 1, n, graph);
    count += dfs(x, y - 1, n, graph);
    return count;
  }
  return 0;
}