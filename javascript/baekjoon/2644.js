const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// n : 전체 사람의 수
const n = Number(input[0]);

// 구해야할 촌수: start -> target
const [start, target] = input[1].split(' ').map(Number);
// m: 관계의 개수
const m = Number(input[2]);

// 촌수 그래프 구현
const graph = [];
for (let i = 0; i <= 100; i++) graph.push([]);
for (let i = 3; i < m + 3; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const visited = new Array(101).fill(false);

let answer = 0;

function dfs(start, degree = 0) {
  if (start === target) answer = degree;
  visited[start] = true;

  for (let i of graph[start]) {
    if (!visited[i]) {
      dfs(i, degree + 1);
    }
  }
}

dfs(start);
console.log(answer === 0 ? -1 : answer);