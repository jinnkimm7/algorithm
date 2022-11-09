// https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript

function solution(my_string, letter) {
  var answer = '';

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === letter) continue;
    else answer += my_string[i];
  }

  return answer;
}