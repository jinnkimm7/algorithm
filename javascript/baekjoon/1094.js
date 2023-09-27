const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let X = Number(input[0]);
let STICK_LENGTH = 64;
const sticks = [STICK_LENGTH];

while (STICK_LENGTH > 1) {
  STICK_LENGTH /= 2
  sticks.push(STICK_LENGTH);
}

let answer = 0;

for (let i = 0; i < sticks.length; i++) {
  if (X === 0) break;

  const stick = sticks[i];

  if (stick > X) continue;
  else if (stick <= X) {
    answer++;
    X -= stick;
  }
}

console.log(answer);