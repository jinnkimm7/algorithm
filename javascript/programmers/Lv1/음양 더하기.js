// https://school.programmers.co.kr/learn/courses/30/lessons/76501?language=javascript

function solution(absolutes, signs) {
  return absolutes.reduce((a, c, i) => a + (signs[i] ? c : -c), 0);
}