// https://school.programmers.co.kr/learn/courses/30/lessons/120904?language=javascript

function solution(num, k) {
  const answer = num.toString().indexOf(k);
  return answer === -1 ? -1 : answer + 1;
}