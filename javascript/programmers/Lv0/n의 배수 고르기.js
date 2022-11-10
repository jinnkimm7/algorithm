// https://school.programmers.co.kr/learn/courses/30/lessons/120905?language=javascript

function solution(n, numlist) {
  return numlist.filter(v => v % n === 0);
}