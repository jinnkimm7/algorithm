// 실버 3
// https://www.acmicpc.net/problem/15657

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

let answer = '';
const selected = [];
function dfs(depth, start) {
  if (depth === m) {
    answer += selected.join(' ') + '\n';
    return;
  }

  for (let i = start; i < arr.length; i++) {
    selected.push(arr[i]);
    dfs(depth + 1, i);
    selected.pop();
  }
}

dfs(0, 0);
console.log(answer);