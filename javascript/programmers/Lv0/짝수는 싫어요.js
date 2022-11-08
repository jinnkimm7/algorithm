// https://school.programmers.co.kr/learn/courses/30/lessons/120813?language=javascript

function solution(n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) answer.push(i);
  }

  return answer;
}