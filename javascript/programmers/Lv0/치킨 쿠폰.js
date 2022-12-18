// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  let answer = 0;
  let coupon = chicken

  while (coupon >= 10) {
    answer = answer + parseInt(coupon / 10)
    coupon = parseInt(coupon / 10) + coupon % 10
  }

  return answer;
}