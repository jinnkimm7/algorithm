// https://school.programmers.co.kr/learn/courses/30/lessons/120851?language=javascript

function solution(my_string) {
  return my_string.match(/[0-9]/g).reduce((a, c) => a + parseInt(c), 0);
}