// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.reduce((a, c, i) => a + (c * b[i]), 0);
}