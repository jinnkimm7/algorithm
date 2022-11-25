// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function solution(n) {
  let answer = 1;
  while (n >= factorial(answer)) {
    answer++;
  }
  return answer - 1;
}