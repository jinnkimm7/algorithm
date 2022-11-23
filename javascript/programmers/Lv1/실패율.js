// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const answer = [];
  let user = stages.length;
  for (let i = 0; i < N; i++) {
    let count = stages.filter(v => v === i + 1).length;
    answer.push([count / user, i + 1]);
    user -= count;
  }

  return answer.sort((a, b) => b[0] - a[0])
    .map(v => v[1]);
}