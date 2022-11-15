// https://school.programmers.co.kr/learn/courses/30/lessons/12928?language=javascript

function solution(n) {
  return new Array(n).fill(1).map((v, i) => v + i)
    .filter(v => n % v === 0)
    .reduce((a, c) => a + c, 0);
}