// https://school.programmers.co.kr/learn/courses/30/lessons/120583?language=javascript#

function solution(array, n) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) count++;
  }

  return count;
}