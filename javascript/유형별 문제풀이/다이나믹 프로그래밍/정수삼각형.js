// Lv3
// https://school.programmers.co.kr/learn/courses/30/lessons/43105

function solution(triangle) {
  const dp = triangle.slice();
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (j === 0) {
        dp[i][j] += dp[i - 1][j];
      } else if (j === dp[i].length - 1) {
        dp[i][j] += dp[i - 1][j - 1];
      } else {
        dp[i][j] += Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }

  return Math.max(...dp[dp.length - 1]);
}