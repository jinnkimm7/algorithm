const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// 표의 크기: n, 합을 구해야하는 횟수: m
const [n,m] = input[0].split(' ').map(Number);

// 주어진 표: arr
const arr = [new Array(n + 1).fill(0)];
for (let i = 1; i <= n; i++) {
  arr.push([0, ...input[i].split(' ').map(Number)]);
}
// console.log(arr);

// 이차원 구간합 배열: prefixSum
const prefixSum = [];
for (let i = 0; i < n + 1; i++) prefixSum.push(new Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    prefixSum[i][j] = arr[i][j] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1];
  }
}
// console.log(prefixSum);

let answer = '';
for (let i = n + 1; i < n + 1 + m; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number);

  answer += (prefixSum[x2][y2] - prefixSum[x2][y1 - 1] - prefixSum[x1 - 1][y2] + prefixSum[x1 - 1][y1 - 1]) + '\n';
}

console.log(answer);