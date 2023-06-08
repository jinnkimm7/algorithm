const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let [A, B] = input[0].split(' ').map(Number);

let flag = false;
let answer = 1;
while (A <= B) {
  if (A === B) {
    flag = true;
    break;
  }
  if (B % 2 === 0) B /= 2;
  else if (B % 10 === 1) B = parseInt(B / 10);
  else break;
  answer++;
}

if (flag) console.log(answer);
else console.log(-1);