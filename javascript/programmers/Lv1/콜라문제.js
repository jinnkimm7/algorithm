// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const newCokes = Math.floor(n / a) * b;
    answer += newCokes;
    n = newCokes + (n % a);
  }
  return answer;
}