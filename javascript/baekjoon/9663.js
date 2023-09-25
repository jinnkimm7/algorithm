const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const queens = [];

function possible(x, y) {
  for (let [a, b] of queens) {
    if (a === x || b === y) return false; // 같은 행이나 열에 있는 경우,
    if (Math.abs(a - x) === Math.abs(b - y)) return false; // 대각선에 위치한 경우, 퀸을 놓을 수 없다.
  }
  return true;
}

let answer = 0;
function dfs(row) {
  if (row === n) answer++;

  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);
console.log(answer);