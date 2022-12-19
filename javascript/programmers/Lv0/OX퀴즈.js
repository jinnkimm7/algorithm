// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  const answer = [];

  for (let i = 0; i < quiz.length; i++) {
    const temp = quiz[i].split(' ');
    const number1 = parseInt(temp[4]);
    let number2 = 0;

    if (temp[1] === '+') {
      number2 = parseInt(temp[0]) + parseInt(temp[2]);
    } else if (temp[1] === '-') {
      number2 = parseInt(temp[0]) - parseInt(temp[2]);
    }

    number1 === number2 ? answer.push('O') : answer.push('X');
  }

  return answer;
}