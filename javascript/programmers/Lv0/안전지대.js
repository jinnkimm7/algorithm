// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution1(board) {
  const isBombNearby = (r, c) => {
    const nearby = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    const isInBoard = (r, c) => r >= 0 && r < board.length && c >= 0 && c < board.length;

    return nearby.some(([dR, dC]) => isInBoard(r + dR, c + dC) && board[r + dR][c + dC] === 1);
  };

  let count = 0;

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      if (board[r][c] !== 1 && !isBombNearby(r, c)) count += 1;
    }
  }
  return count;
}

function solution2(board) {
  // 1. 폭탄 위치 확인하기
  const bombs = [];

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 1) bombs.push([x, y]);
    }
  }

  // 2. 위험지역 위치 찾기
  const dangers = [];
  const dx = [0, 0, -1, 1, 1, -1, -1, 1];
  const dy = [1, -1, 0, 0, 1, 1, -1, -1];

  for (let i = 0; i < bombs.length; i++) {
    const bomb = bombs[i];

    for (let j = 0; j < dx.length; j++) {
      let x = bomb[0];
      let y = bomb[1];

      const nx = x + dx[j];
      const ny = y + dy[j];

      if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length) {
        x = nx;
        y = ny;
        dangers.push([x, y]);
      }
    }
  }

  // 3. 위험지역 1로 만들기
  for (let i = 0; i < dangers.length; i++) {
    const danger = dangers[i];
    const x = danger[0];
    const y = danger[1];

    if (board[x][y] === 0) board[x].splice(y, 1, 1);
  }

  // 4. 0(안전지대) 갯수 세기
  var answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) answer++;
    }
  }

  return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]));