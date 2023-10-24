const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const setA = new Set();
for (let i = 1; i <= n; i++) setA.add(input[i]);

const arrB = [];
for (let i = n + 1; i <= n + m; i++) arrB.push(input[i]);

const answer = arrB.filter((person) => setA.has(person)).sort();

console.log(answer.length);
console.log(answer.join('\n'));