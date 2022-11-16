// https://school.programmers.co.kr/learn/courses/30/lessons/86051?language=javascript

function solution1(numbers) {
  return 45 - numbers.reduce((a, c) => a + c, 0);
}

function solution2(numbers) {
  let answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}