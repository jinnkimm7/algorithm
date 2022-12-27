// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
  dots = dots.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else if (a[1] === b[1]) return a[0] - b[0];
  });

  return Math.abs(dots[0][0] - dots[3][0]) * Math.abs(dots[0][1] - dots[3][1]);
}