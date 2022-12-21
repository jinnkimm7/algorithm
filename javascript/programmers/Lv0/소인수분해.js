// https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  const answer = [];

  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i);
      while (n % i == 0) {
        n /= i;
      }
    }
  }

  return answer;
}