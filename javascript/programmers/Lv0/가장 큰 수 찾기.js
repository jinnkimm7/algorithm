// https://school.programmers.co.kr/learn/courses/30/lessons/120899?language=javascript

function solution(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }

  return [max, array.indexOf(max)];
}

