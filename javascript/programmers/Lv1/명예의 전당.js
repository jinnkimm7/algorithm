// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  const answer = [];

  const honors = [];

  for (let i = 0; i < score.length; i++) {
    honors.push(score[i]);
    honors.sort((a, b) => b - a);

    if (honors.length <= k) {
      answer.push(honors[honors.length - 1]);
    } else {
      honors.pop();
      answer.push(honors[honors.length - 1]);
    }
  }

  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));