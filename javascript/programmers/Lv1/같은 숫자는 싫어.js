// https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

function solution(arr) {
  return arr.filter((v, i) => v !== arr[i + 1]);
}