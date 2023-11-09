// 실버 2
// https://www.acmicpc.net/problem/1541

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const s = input[0];

const temp = s.split('-').map(el => el.split('+'))
  .map(el => el.reduce((acc, cur) => acc + parseInt(cur), 0));

let answer = parseInt(temp[0]);
for (let i = 1; i < temp.length; i++) answer -= parseInt(temp[i]);

console.log(answer);