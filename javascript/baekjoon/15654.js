// 실버 3
// https://www.acmicpc.net/problem/15654

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const visited = new Array(n + 1).fill(false);

let answer = '';
const selected = [];
function dfs(depth) {
  if (depth === m) {
    answer += selected.join(' ') + '\n';
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[arr[i]]) continue;
    selected.push(arr[i]);
    visited[arr[i]] = true;
    dfs(depth + 1);
    selected.pop();
    visited[arr[i]] = false;
  }
}

dfs(0);
console.log(answer);