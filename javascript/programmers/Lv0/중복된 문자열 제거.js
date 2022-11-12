// https://school.programmers.co.kr/learn/courses/30/lessons/120888?language=javascript

function solution(my_string) {
  return [... new Set(my_string)].join('');
}