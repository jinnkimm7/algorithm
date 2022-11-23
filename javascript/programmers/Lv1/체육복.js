// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
  const arr = Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    arr[lost[i] - 1] -= 1;
  }
  for (let i = 0; i < reserve.length; i++) {
    arr[reserve[i] - 1] += 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && arr[i - 1] === 2) {
      arr[i] += 1;
      arr[i - 1] -= 1;
    }
    if (arr[i] === 0 && arr[i + 1] === 2) {
      arr[i] += 1;
      arr[i + 1] -= 1;
    }
  }

  return arr.filter(v => v > 0).length;
}