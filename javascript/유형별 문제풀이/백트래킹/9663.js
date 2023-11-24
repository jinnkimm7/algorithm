// 골드 4
// https://www.acmicpc.net/problem/9663

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const queens = [];

function isPossible(x, y) {
  for (let [a, b] of queens) {
    if (a === x || b === y) return false;
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
}

let answer = 0;
function dfs(row) {
  if (row === n) {
    answer++;
  }

  for (let i = 0; i < n; i++) {
    if (!isPossible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);
console.log(answer);