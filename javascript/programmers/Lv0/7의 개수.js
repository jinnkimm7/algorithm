// https://school.programmers.co.kr/learn/courses/30/lessons/120912?language=javascript

function solution(array) {
  return array.join('').split('').filter(v => v === '7').length;
}