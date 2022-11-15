// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  return (n + '').split('').reverse().map(v => parseInt(v));
}