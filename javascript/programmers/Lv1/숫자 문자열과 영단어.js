// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution1(s) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i < numbers.length; i++) {
    if (s.includes(numbers[i])) {
      s = s.replaceAll(numbers[i], i);
    }
  }

  return parseInt(s);
}

function solution2(s) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i < numbers.length; i++) {
    s = s.split(numbers[i]).join(i);
  }

  return parseInt(s);
}