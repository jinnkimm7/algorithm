// https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

function solution(numbers) {
  numbers = numbers.map(v => v + '').sort((a, b) => (b + a) - (a + b)).join('');

  return numbers[0] === '0' ? '0' : numbers;
}