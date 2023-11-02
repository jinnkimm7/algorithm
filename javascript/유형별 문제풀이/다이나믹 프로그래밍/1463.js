// 실버 3
// https://www.acmicpc.net/problem/1463

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// DFS로 풀기
// const n = Number(input[0]);

// const visited = new Array(n + 1).fill(0);

// const queue = [n];
// visited[n] = 1;

// while (queue.length !== 0) {
//   const current = queue.shift();

//   if (current === 1) {
//     console.log(visited[current] - 1);
//     break;
//   }

//   for (let next of [current / 3, current / 2, current - 1]) {
//     if (next !== parseInt(next)) continue;

//     if (visited[next] === 0 && next >= 1) {
//       queue.push(next);
//       visited[next] = visited[current] + 1;
//     }
//   }
// }


// DP로 풀기
const n = Number(input[0]);
const dp = [0, 0];

for (let i = 2; i <= n; i++) {
  if (i % 3 === 0 && i % 2 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1, dp[i / 3] + 1);
  } else if (i % 3 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1);
  } else if (i % 2 === 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1);
  } else {
    dp[i] = dp[i - 1] + 1;
  }
}

console.log(dp[n]);
