// 실버 3
// https://www.acmicpc.net/problem/15651

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const numArr = new Array(n).fill(1).map((v, i) => v + i);
const visited = new Array(n + 1).fill(false);

let answer = '';
const selected = [];

function dfs(depth) {
  if (depth === m) {
    answer += selected.join(' ') + '\n';
    return;
  }

  for (let i = 0; i < numArr.length; i++) {
    selected.push(numArr[i]);
    dfs(depth + 1);
    selected.pop();
  }
}

dfs(0);
console.log(answer);