// https://school.programmers.co.kr/learn/courses/30/lessons/120911?language=javascript

function solution(my_string) {
  return my_string.split('').map(v => v.toLowerCase()).sort().join('');
}