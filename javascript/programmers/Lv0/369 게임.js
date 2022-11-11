// https://school.programmers.co.kr/learn/courses/30/lessons/120891?language=javascript

function solution(order) {
  return order.toString().split('').filter(v => v === '3' || v === '6' || v === '9').length;
}