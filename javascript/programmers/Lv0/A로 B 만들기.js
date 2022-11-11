// https://school.programmers.co.kr/learn/courses/30/lessons/120886?language=javascript

function solution(before, after) {
  before = before.toString().split('').sort().join('');
  after = after.toString().split('').sort().join('');

  return before === after ? 1 : 0;
}