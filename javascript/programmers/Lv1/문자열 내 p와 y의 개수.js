// https://school.programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

function solution(s) {
  let count = 0;

  s = s.toLowerCase().split('').map((v) => {
    if (v === 'p') count++;
    else if (v === 'y') count--;
  })

  return count === 0 ? true : false;
}