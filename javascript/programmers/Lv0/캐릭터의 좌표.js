// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  const board_x = (board[0] - 1) / 2;
  const board_y = (board[1] - 1) / 2;

  let x = 0;
  let y = 0;

  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case 'left':
        if (x - 1 >= -(board_x)) x -= 1;
        break;

      case 'right':
        if (x + 1 <= board_x) x += 1;
        break;

      case 'down':
        if (y - 1 >= -(board_y)) y -= 1;
        break;

      case 'up':
        if (y + 1 <= board_y) y += 1;
        break;

      default:
        break;
    }
  }

  return [x, y];
}