// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  var answer = 0;

  const picked = [];

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      if (board[j][move] === 0) continue;
      else {
        picked.push(board[j][move]);
        board[j][move] = 0;
        break;
      }
    }
  }

  const stack = [];
  for (let i = 0; i < picked.length; i++) {
    if (stack.length === 0) {
      stack.push(picked[i]);
    } else if (stack[stack.length - 1] === picked[i]) {
      stack.pop();
      answer += 2;
    } else {
      stack.push(picked[i]);
    }
  }

  return answer;
}