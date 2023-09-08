function solution(triangle) {
  const dp = triangle.slice();

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      // 왼쪽 위의 값이 없는 경우
      if (j === 0) {
        dp[i][j] += dp[i - 1][j];
      } else if (j === dp[i].length - 1) { // 위의 값이 없는 경우
        dp[i][j] += dp[i - 1][j - 1];
      } else {
        dp[i][j] += Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }

  return Math.max(...dp[dp.length - 1]);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]))