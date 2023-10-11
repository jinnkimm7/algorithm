const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// 도시의 크기 N, 치킨집의 개수 M
const [N, M] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 1; i <= N; i++) graph.push(input[i].split(' ').map(Number));

const house = [];
const chicken = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1) house.push([i, j]);
    if (graph[i][j] === 2) chicken.push([i, j]);
  }
}

const visited = new Array(chicken.length).fill(false);
const selected = [];
let answer = 1e9;

function dfs(depth, start) {
  if (depth === M) {
    const result = []; // 조합의 결과를 처리하는 테이블
    for (let i of selected) result.push(chicken[i]);
    let sum = 0; // 치킨거리의 합
    for (let [hx, hy] of house) {
      let temp = 1e9;
      for (let [cx, cy] of result) {
        temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
      sum += temp;
    }
    answer = Math.min(answer, sum);
    return;
  }

  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) continue; // 중복을 허용하지 않으므로, 이미 처리된 원소라면 무시
    selected.push(i); // 현재원소 선택
    visited[i] = true; // 현재원소 방문처리
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(answer);