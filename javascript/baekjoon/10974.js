const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

let answer = '';
const visited = new Array(n + 1).fill(false);
const selected = [];

function dfs(depth) {
  if (depth === n) {
    answer += `${selected.join(' ')}\n`;
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;

    selected.push(i);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(answer);