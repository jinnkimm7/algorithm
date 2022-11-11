// https://school.programmers.co.kr/learn/courses/30/lessons/120844?language=javascript

function solution(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());
  } else if (direction === 'left') {
    numbers.push(numbers.shift());
  }
  return numbers;
}