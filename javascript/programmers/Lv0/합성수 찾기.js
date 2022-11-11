// https://school.programmers.co.kr/learn/courses/30/lessons/120846?language=javascript


function solution(n) {
  var answer = 0;

  for (let i = 3; i <= n; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }

    if (count >= 3) answer++;
  }

  return answer;
}