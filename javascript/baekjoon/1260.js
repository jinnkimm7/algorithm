const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m, v] = input[0].split(' ').map(Number);

// 그래프 구현
const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
graph.map(node => node.sort((a, b) => a - b));

const visited_dfs = new Array(n + 1).fill(false);
let answer_dfs = '';
function dfs(start) {
  visited_dfs[start] = true;
  answer_dfs += start + ' ';

  for (let i of graph[start]) {
    if (!visited_dfs[i]) dfs(i);
  }
}

const visited_bfs = new Array(n + 1).fill(false);
let answer_bfs = '';
function bfs(start) {
  visited_bfs[start] = true;

  const queue = [];
  queue.push(start);

  while (queue.length !== 0) {
    const value = queue.shift();
    answer_bfs += value + ' ';

    for (let i of graph[value]) {
      if (!visited_bfs[i]) {
        visited_bfs[i] = true;
        queue.push(i);
      }
    }
  }
}

dfs(v);
bfs(v);
console.log(answer_dfs);
console.log(answer_bfs);