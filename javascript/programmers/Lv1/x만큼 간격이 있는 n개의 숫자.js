// https://school.programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

function solution(x, n) {
  return new Array(n).fill(x).map((v, i) => v * (i + 1));
}