// https://school.programmers.co.kr/learn/courses/30/lessons/120837?language=javascript

function solution(hp) {
  var answer = 0;

  const ants = [5, 3, 1];

  let i = 0;
  while (hp !== 0) {
    answer += parseInt(hp / ants[i]);
    hp = hp % ants[i];
    i++;
  }

  return answer;
}