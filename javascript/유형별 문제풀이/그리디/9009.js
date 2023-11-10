// 실버 1
// https://www.acmicpc.net/problem/9009

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let testCases = Number(input[0]);

const fibos = [0, 1];
for (let i = 2; i < 100; i++) {
  const fibo = fibos[i - 2] + fibos[i - 1];
  if (fibo <= 1000000000) fibos[i] = fibo
  else break;
}
fibos.reverse();

let line = 1;
while (testCases--) {
  let n = Number(input[line]);
  const temp = [];

  for (let fibo of fibos) {
    if (fibo > n) continue;
    else if (fibo === n) {
      temp.push(fibo);
      break;
    } else {
      temp.push(fibo);
      n -= fibo;
    }
  }

  console.log(temp.reverse().join(' '));

  line += 1;
}