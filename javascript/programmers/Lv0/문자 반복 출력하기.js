// https://school.programmers.co.kr/learn/courses/30/lessons/120825?language=javascript

function solution(my_string, n) {
  var answer = '';

  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i].repeat(n);
  }

  return answer;
}