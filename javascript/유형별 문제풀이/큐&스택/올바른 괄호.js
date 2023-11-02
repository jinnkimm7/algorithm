// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') count++;
    else count--;

    if (count < 0) return false;
  }

  return count === 0 ? true : false;
}
