// https://school.programmers.co.kr/learn/courses/30/lessons/120814?language=javascript

function solution(n) {
  return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
}