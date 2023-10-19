const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// n: 줄의 수, m: 최대 치킨집의 개수
const [n, m] = input[0].split(' ').map(Number);

// 그래프 정보 입력받기
const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(' ').map(Number));

const houses = [];
const chickenHouses = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 1) houses.push([i, j]);
    if (graph[i][j] === 2) chickenHouses.push([i, j]);
  }
}

const answer = [];
const combinations = [];
const visited = new Array(chickenHouses.length).fill(false);
function dfs(depth, start) {
  if (depth === m) {
    console.log(combinations);
    let total = 0;
    for (let i = 0; i < houses.length; i++) {
      let dist = 1e9;
      const [hx, hy] = houses[i];
      for (let j = 0; j < combinations.length; j++) {
        const [cx, cy] = combinations[j];
        dist = Math.min(Math.abs(hx - cx) + Math.abs(hy - cy), dist);
      }
      total += dist;
    }

    answer.push(total);
    return;
  }

  for (let i = start; i < chickenHouses.length; i++) {
    if (visited[i]) continue;

    combinations.push(chickenHouses[i]);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    combinations.pop();
    visited[i] = false;
  }
}

dfs(0, 0);

console.log(Math.min(...answer));