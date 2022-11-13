// https://school.programmers.co.kr/learn/courses/30/lessons/120913?language=javascript

function solution(my_str, n) {
  var answer = [];

  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }

  return answer;
}