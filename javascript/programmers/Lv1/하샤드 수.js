// https://school.programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

function solution(x) {
  const sum = (x + '').split('').reduce((a, c) => a + parseInt(c), 0);
  return x % sum === 0 ? true : false;
}