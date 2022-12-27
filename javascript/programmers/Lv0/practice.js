function solution(polynomial) {
  polynomial = polynomial.split('+');

  const xs = [];
  const numbers = [];

  for (let i = 0; i < polynomial.length; i++) {
    if (polynomial[i].includes('x')) xs.push(polynomial[i]);
    else numbers.push(polynomial[i]);
  }

  const number = numbers.reduce((a, c) => a + (c * 1), 0);

  return xs.map(v => v.trim()).replace('x', '');
}

console.log(solution("3x + 7 + x"));
console.log(solution("x + x + x"));