// https://school.programmers.co.kr/learn/courses/30/lessons/120841?language=javascript

function solution(dot) {
  let answer = 0;
  const x = dot[0];
  const y = dot[1];

  if (x > 0 && y > 0) answer = 1;
  else if (x < 0 && y > 0) answer = 2;
  else if (x < 0 && y < 0) answer = 3;
  else if (x > 0 && y < 0) answer = 4;

  return answer;
}