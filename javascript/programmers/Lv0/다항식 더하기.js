// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  var answer = '';

  const arr = polynomial.split(' ');

  const x = [];
  const numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('x')) x.push(arr[i]);
    else if (parseInt(arr[i])) numbers.push(arr[i]);
  }

  x.map(v => v.splice('x', ''));

  return x;
}

console.log(solution("3x + 7 + x"));
console.log(solution("x + x + x"));