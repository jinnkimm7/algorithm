// https://school.programmers.co.kr/learn/courses/30/lessons/12903?language=javascript

function solution(s) {
  const len = s.length;
  return len % 2 === 0 ? s.substr(len / 2 - 1, 2) : s.substr(parseInt(len / 2), 1);
}