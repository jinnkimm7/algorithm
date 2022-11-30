// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  var answer = [];
  const arr = score.map(v => (v[0] + v[1]) / 2);
  const sorted = score.map(v => (v[0] + v[1]) / 2).sort((a, b) => b - a);
  return arr.map(v => sorted.indexOf(v) + 1);
}