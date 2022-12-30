// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function gcd(a, b) {
  if (a % b === 0) return b;
  else return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}