// https://school.programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

function solution(num) {
  var answer = 0;

  while (num !== 1 && answer < 500) {
    if (num % 2 === 0) num /= 2;
    else if (num % 2 !== 0) num = (num * 3) + 1;

    answer++;
  }

  return answer === 500 ? -1 : answer;
}