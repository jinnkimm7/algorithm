const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [count, money] = input[0].split(' ').map(v => Number(v));
const coins = [];

for (let i = count; i > 0; i--) {
  coins.push(Number(input[i]));
}

let answer = 0;

for (let i = 0; i < coins.length; i++) {
  if (
    (money / coins[i]) < 0
  ) continue;
  else {
    answer += parseInt(money / coins[i]);
    money %= coins[i];
  }
}

console.log(answer);