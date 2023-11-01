const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

let count = 0;

for (let i = 1; i <= n; i++) {
  const word = input[i];
  const alphas = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    const alpha = word[j];

    if (alphas.includes(alpha) && alpha !== word[j - 1]) {
      isGroupWord = false;
      break;
    } else {
      alphas.push(alpha);
    }

  }
  if (isGroupWord) count++;
}

console.log(count);