// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  arr = arr.filter(v => v % divisor === 0).sort((a, b) => a - b);
  return arr.length ? arr : -1;
}