// 실버 3
// https://www.acmicpc.net/problem/17413

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const s = input[0];

let answer = '';
let temp = '';
let isTagOpen = false;

for (let char of s) {
  // console.log(char);
  if (char === '<') {
    isTagOpen = true;
    answer += temp.split('').reverse().join('') + char;
    temp = '';
  } else if (char === '>') {
    isTagOpen = false;
    answer += temp + char;
    temp = '';
  } else if (char === ' ') {
    if (isTagOpen) {
      answer += temp;
    } else {
      answer += temp.split('').reverse().join('');
    }
    answer += char;
    temp = '';
  }
  else {
    temp += char;
  }
}

answer += temp.split('').reverse().join('');

console.log(answer);