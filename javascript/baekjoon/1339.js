const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
let words = [];
for (let i = 1; i <= n; i++) words.push(input[i]);

const map = new Map();

words.forEach((word) => {
  word.split('').forEach((alpha, i) => {
    const temp = 10 ** (word.length - 1 - i);
    map.set(alpha, (map.get(alpha) || 0) + temp);
  })
})

const sortedMap = new Map([...map].sort((a, b) => b[1] - a[1]));

let answer = 0;
let index = 9;

for (let [_, value] of sortedMap) {
  answer += value * index;
  index -= 1;
}

console.log(answer);