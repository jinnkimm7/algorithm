// https://school.programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}