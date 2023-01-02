// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript 
function solution(s) {
  const stack = [];

  if (s[0] === ')') return false;

  for (const c of s) {
    if (c === '(') stack.push(c);
    else stack.pop();
  }

  return stack.length === 0 ? true : false;
}