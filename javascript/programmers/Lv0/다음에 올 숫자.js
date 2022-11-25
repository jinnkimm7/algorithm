// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
  let answer = 0;

  const arr = [];

  for (let i = 0; i < common.length - 1; i++) {
    arr.push(common[i + 1] - common[i]);
  }

  if (arr[1] === arr[0]) {
    answer = common[common.length - 1] + arr[0];
  } else {
    answer = common[common.length - 1] * (arr[1] / arr[0]);
  }

  return answer;
}