// https://school.programmers.co.kr/learn/courses/30/lessons/120816?language=javascript

function solution(slice, n) {
  return n % slice === 0 ? parseInt(n / slice) : parseInt(n / slice) + 1;
}