// https://school.programmers.co.kr/learn/courses/30/lessons/12931?language=javascript

function solution(n) {
  return n.toString().split('').reduce((a, c) => a + (c * 1), 0);
}