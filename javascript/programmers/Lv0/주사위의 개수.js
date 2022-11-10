// https://school.programmers.co.kr/learn/courses/30/lessons/120845?language=javascript

function solution(box, n) {
  var answer = 1;

  for (let i = 0; i < box.length; i++) {
    answer *= parseInt(box[i] / n);
  }

  return answer;
}