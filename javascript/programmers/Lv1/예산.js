// https://school.programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) {
      answer++;
    }
    else break;
  }

  return answer;
}