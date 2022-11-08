// https://school.programmers.co.kr/learn/courses/30/lessons/120833?language=javascript

function solution(numbers, num1, num2) {
  let answer = [];

  for (let i = num1; i <= num2; i++) {
    answer.push(numbers[i]);
  }

  return answer;
}