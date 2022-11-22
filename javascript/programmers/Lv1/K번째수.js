// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  const answer = [];
  let i = 0;
  let j = 0;
  let k = 0;

  for (let a = 0; a < commands.length; a++) {
    i = commands[a][0];
    j = commands[a][1];
    k = commands[a][2];

    let temp = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(temp[k - 1]);
  }

  return answer;
}