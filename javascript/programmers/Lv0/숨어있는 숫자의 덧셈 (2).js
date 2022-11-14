// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  return my_string.toLowerCase().split(/[a-z]/g).map(v => v * 1)
    .reduce((a, c) => a + c, 0);
}