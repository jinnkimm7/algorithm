// https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=javascript

function solution(num, total) {
  var answer = [];

  const mid = parseInt(total / num);
  answer.push(mid);
  num--;

  while (num !== 0) {
    if (num % 2 === 0) answer.unshift(answer[0] - 1);
    else answer.push(answer[answer.length - 1] + 1);
    num--;
  }

  return answer;
}