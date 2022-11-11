// https://school.programmers.co.kr/learn/courses/30/lessons/120862?language=javascript

function solution(numbers) {
  let answer = 0;

  numbers.sort((a, b) => a - b);

  let a = numbers[0] * numbers[1];
  let b = numbers[numbers.length - 1] * numbers[numbers.length - 2];

  return a > b ? a : b;
}