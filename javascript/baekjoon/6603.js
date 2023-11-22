// 실버 2
// https://www.acmicpc.net/problem/6603

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let testCases = input.length - 1;

for (let i = 0; i < testCases; i++) {
  let answer = '';
  const [k, ...arr] = input[i].split(' ').map(Number);

  const visited = new Array(k).fill(false);
  const selected = [];

  dfs(0, 0);

  console.log(answer);

  function dfs(depth, start) {
    if (depth === 6) {
      answer += selected.join(' ') + '\n';
      return;
    }

    for (let i = start; i < arr.length; i++) {
      if (visited[i]) continue;
      selected.push(arr[i]);
      visited[i] = true;
      dfs(depth + 1, i + 1);
      selected.pop();
      visited[i] = false;
    }
  }
}