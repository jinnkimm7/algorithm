// 실버 3
// https://www.acmicpc.net/problem/15650

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const numArr = new Array(n).fill(1).map((v, i) => v + i);
const visited = new Array(n + 1).fill(false);

let answer = '';
const selected = [];
function dfs(depth, start) {
  if (depth === m) {
    answer += selected.join(' ') + '\n';
    return;
  }

  for (let i = start; i < numArr.length; i++) {
    if (visited[numArr[i]]) continue;

    selected.push(numArr[i]);
    visited[numArr[i]] = true;
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[numArr[i]] = false;
  }
}

dfs(0, 0);
console.log(answer);