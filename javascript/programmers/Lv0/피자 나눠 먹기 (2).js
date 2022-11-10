// https://school.programmers.co.kr/learn/courses/30/lessons/120815?language=javascript

function solution(n) {
  var answer = 1;

  let slice = 6 * answer;

  while (slice % n !== 0) {
    answer++;
    slice = 6 * answer;
  }

  return answer;
}