// 실버 3
// https://www.acmicpc.net/problem/2606

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const v = Number(input[1]);

const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 2; i < 2 + v; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const visited = new Array(n + 1).fill(false);

let answer = 0;

// DFS로 풀기
// dfs(1);
// console.log(answer);

// function dfs(start) {
//   visited[start] = true;
//   for (let next of graph[start]) {
//     if (!visited[next]) {
//       answer += 1;
//       dfs(next);
//     }
//   }
// }

const queue = [1];
visited[1] = true;

while (queue.length !== 0) {
  const current = queue.shift();

  for (let next of graph[current]) {
    if (!visited[next]) {
      visited[next] = true;
      answer += 1;
      queue.push(next);
    }
  }
}

console.log(answer);