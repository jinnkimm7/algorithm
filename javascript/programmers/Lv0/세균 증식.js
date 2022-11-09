// https://school.programmers.co.kr/learn/courses/30/lessons/120910?language=javascript

function solution(n, t) {
  var answer = n;

  for (let i = 0; i < t; i++) {
    answer *= 2;
  }

  return answer;
}