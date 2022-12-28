// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  polynomial = polynomial.split('+').map(v => v.trim());
  const xs = [];
  const numbers = [];

  for (let i = 0; i < polynomial.length; i++) {
    if (polynomial[i].includes('x')) xs.push(polynomial[i]);
    else numbers.push(polynomial[i]);
  }

  const x = xs.map(v => v.replace('x', ''))
    .reduce((a, c) => {
      if (c === '') return a + 1;
      else return a + (c * 1)
    }, 0);

  const number = numbers.reduce((a, c) => a + (c * 1), 0);

  if (number === 0 && x === 0) return 0;
  if (x === 1 && number !== 0) return `x + ${number}`;
  if (x === 1) return `x`;
  if (x === 0) return `${number}`;
  if (number === 0) return `${x}x`;

  return `${x}x + ${number}`;
}