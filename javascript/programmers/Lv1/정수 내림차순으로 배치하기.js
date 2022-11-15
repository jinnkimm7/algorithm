// https://school.programmers.co.kr/learn/courses/30/lessons/12933?language=javascript

function solution(n) {
  return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}