// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split('').every(v => !isNaN(v));
  } else {
    return false;
  }
}