// https://school.programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

function solution(s) {
  return s.split(' ')
    .map(v => v.split('').map((v, i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()).join('')).join(' ');
  ;
}