const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= N; i++) arr.push(i);
const selected = [];

let answer = '';
function dfs(depth) {
  if (depth === M) {
    answer += selected.join(' ') + '\n';
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    selected.push(arr[i]);
    dfs(depth + 1);
    selected.pop();
  }
}

dfs(0);
console.log(answer);