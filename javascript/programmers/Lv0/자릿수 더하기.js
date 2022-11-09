// https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript

function solution(n) {
  var answer = 0;

  while (n > 0) {
    answer += n % 10;
    n = parseInt(n / 10);
  }

  return answer;
}