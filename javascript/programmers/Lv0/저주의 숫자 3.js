// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    answer += 1;
    while (answer.toString().includes('3') || answer % 3 === 0) answer++;
  }

  return answer;
}