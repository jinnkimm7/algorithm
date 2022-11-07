// https://school.programmers.co.kr/learn/courses/30/lessons/120819?language=javascript

function solution(money) {
  var answer = [0, 0];

  answer[0] = parseInt(money / 5500);
  answer[1] = money % 5500;

  return answer;
}