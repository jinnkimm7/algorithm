// https://school.programmers.co.kr/learn/courses/30/lessons/12912?language=javascript

function solution(a, b) {
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  return Array(b - a + 1).fill(a).map((v, i) => v + i)
    .reduce((a, c) => a + c, 0);
}