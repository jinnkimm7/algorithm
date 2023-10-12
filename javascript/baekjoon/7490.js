const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const testCases = Number(input[0]);

for (let tc = 1; tc <= testCases; tc++) {
  const N = Number(input[tc]);
  let answer = '';

  const arr = [];
  for (let i = 1; i <= N; i++) arr.push(i);
  const collection = [];

  function dfs(depth) {
    if (depth === N - 1) {
      const result = [];
      for (let i = 0; i < N - 1; i++) {
        result.push(arr[i]);
        result.push(collection[i]);
      }

      result.push(arr[N - 1]);
      const str = result.join('')
      const temp = str.split(' ').join('');
      const value = eval(temp);

      if (value === 0) answer += str + '\n';
      return;
    }

    for (let x of [' ', '+', '-']) {
      collection.push(x);
      dfs(depth + 1);
      collection.pop();
    }
  }

  dfs(0);
  console.log(answer);
}