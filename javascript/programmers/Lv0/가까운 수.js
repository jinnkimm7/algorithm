// https://school.programmers.co.kr/learn/courses/30/lessons/120890?language=javascript

function solution(array, n) {
  const min = Math.min(...array.map(v => Math.abs(n - v)));
  return array.sort((a, b) => a - b).find(v => Math.abs(n - v) === min);
}