// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
  let answer = 0;

  if (A === B) return 0;

  while (A !== B) {
    A = A.split('');
    const last = A.pop();
    A.unshift(last);
    A = A.join('');
    answer++;

    if (answer > A.length) break;
  }

  return answer > A.length ? -1 : answer;
}