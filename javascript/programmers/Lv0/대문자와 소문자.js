// https://school.programmers.co.kr/learn/courses/30/lessons/120893?language=javascript

function solution(my_string) {
  return my_string.split('').map(v => v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join('');
}