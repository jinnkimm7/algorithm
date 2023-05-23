const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let answer = '';

  const [count, str] = input[i].split(' ');

  for (let j = 0; j < str.length; j++) {
    answer += str[j].repeat(count);
  }
  console.log(answer);
}