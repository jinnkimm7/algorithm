const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const set = new Set();

for (let i = 1; i <= n; i++) {
  const [name, state] = input[i].split(' ');
  if (state === 'enter') set.add(name)
  else if (state === 'leave') set.delete(name);
}

const answer = [...set].sort().reverse();
console.log(answer.join('\n'));