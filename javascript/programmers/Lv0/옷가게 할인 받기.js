// https://school.programmers.co.kr/learn/courses/30/lessons/120818?language=javascript

function solution(price) {
  var answer = 0;

  if (price < 100000) answer = price;
  else if (100000 <= price && price < 300000) answer = price * 0.95;
  else if (300000 <= price && price < 500000) answer = price * 0.9;
  else if (price >= 500000) answer = price * 0.8;

  return parseInt(answer);
}