// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  let answer = 0;
  score = score.sort((a, b) => b - a);

  const boxes = Math.floor(score.length / m);

  for (let i = 1; i <= boxes; i++) {
    answer += score[(m * i) - 1] * m;
  }

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));