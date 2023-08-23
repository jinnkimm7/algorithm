const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// 배열의크기: n행 x m열
const [N, M] = input[0].split(' ').map(Number);

// 초기 배열: arr
const arr = [new Array(M + 1).fill(0)];
for (let i = 1; i <= N; i++) {
  arr.push([0, ...input[i].split(' ').map(Number)]);
}
// console.log(arr);

// 합을 구할 부분의 갯수: K
const K = Number(input[N + 1]);

// 쿼리를 담은 배열
const queries = [];
for(let line = N + 2; line < N + 2 + K; line++) {
  const [i, j, x, y] = input[line].split(' ').map(Number);
  queries.push([i, j, x, y]);
}
// console.log(queries);

// 이차원 배열의 누적합: prefixSum
const prefixSum = [];
for (let i = 0; i <= N; i++) prefixSum.push(new Array(M + 1).fill(0));
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    prefixSum[i][j] = arr[i][j] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1];
  }
}

// console.log(prefixSum);
let answer = '';
for (let index = 0; index < queries.length; index++) {
  const [i, j, x, y] = queries[index];
  answer += prefixSum[x][y] - prefixSum[i - 1][y] - prefixSum[x][j - 1] + prefixSum[i - 1][j - 1]  + '\n';
}

console.log(answer);
