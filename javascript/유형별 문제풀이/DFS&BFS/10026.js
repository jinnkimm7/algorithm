// 골드 5
// https://www.acmicpc.net/problem/10026

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(''));
}

const blindGraph = [];
for (let i = 1; i <= n; i++) {
  blindGraph.push(input[i].split(''));
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (blindGraph[i][j] === 'G') blindGraph[i][j] = 'R';
  }
}

let count = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const color = graph[i][j];
    if (color === 'R' || color === 'G' || color === 'B') {
      if (dfs(i, j, n, graph, color)) count++;
    }
  }
}

let blindCount = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const color = blindGraph[i][j];
    if (color === 'R' || color === 'G' || color === 'B') {
      if (dfs(i, j, n, blindGraph, color)) blindCount++;
    }
  }
}

console.log(count + ' ' + blindCount);

function dfs(x, y, n, graph, color) {
  if (x >= n || x <= -1 || y >= n || y <= -1) return false;
  if (graph[x][y] === -1) return false;

  if (graph[x][y] === color) {
    graph[x][y] = -1;

    dfs(x + 1, y, n, graph, color);
    dfs(x - 1, y, n, graph, color);
    dfs(x, y + 1, n, graph, color);
    dfs(x, y - 1, n, graph, color);
    return true;
  }
  return false;
}