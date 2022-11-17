// https://school.programmers.co.kr/learn/courses/30/lessons/82612?language=javascript

function solution(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) totalPrice += price * i;
  return totalPrice - money < 0 ? 0 : totalPrice - money;
}