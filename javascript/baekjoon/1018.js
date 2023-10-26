const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// 체스판의 경우 두가지, 흰색 먼저인 경우 or 검은색 먼저인 경우
const white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
const black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

const currentBoard = [];
for (let i = 1; i <= n; i++) {
  currentBoard.push(input[i]);
}

let answer = 64;

for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    check(i, j);
  }
}

function check(x, y) {
  let checkWhite = 0;
  let checkBlack = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (currentBoard[i + x][j + y] !== white[i][j]) checkWhite++;
      if (currentBoard[i + x][j + y] !== black[i][j]) checkBlack++;
    }
  }

  let min = Math.min(checkWhite, checkBlack);
  answer = Math.min(answer, min);
}

console.log(answer);