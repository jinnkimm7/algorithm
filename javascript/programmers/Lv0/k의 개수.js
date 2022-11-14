// https://school.programmers.co.kr/learn/courses/30/lessons/120887?language=javascript

function solution(i, j, k) {
  var answer = '';

  for (let a = i; a <= j; a++) {
    answer += a;
  }

  return answer.split('').filter(v => v === k + '').length;
}

function solution(i, j, k) {
  return new Array(j - i + 1).fill(i)
    .map((v, index) => v + index + '').join('').split('')
    .filter(v => v === k + '').length;
}