const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const arr = new Array(N).fill(1).map((v, i) => v + i);
const visited = new Array(N).fill(false);
const selected = [];

let answer = '';
function dfs(depth, start) {
  if (depth === M) {
    answer += selected.join(' ') + '\n';
    return;
  }

  for (let i = start; i < N; i++) {
    if (visited[i]) continue;

    selected.push(arr[i]);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(answer);
