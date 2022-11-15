// https://school.programmers.co.kr/learn/courses/30/lessons/12944?language=javascript

function solution(arr) {
  return arr.reduce((a, c) => a + c, 0) / arr.length;
}