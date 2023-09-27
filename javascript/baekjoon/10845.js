const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const commands = [];
for (let i = 1; i <= n; i++) commands.push(input[i].split(' '));
const queue = [];

let answer = '';
for (let [command, val] of commands) {
  if (command === 'push') {
    queue.push(val);
  } else if (command === 'pop') {
    if (queue.length === 0) answer += '-1\n';
    else answer += queue.shift() + '\n';
  } else if (command === 'size') {
    answer += queue.length + '\n';
  } else if (command === 'empty') {
    if (queue.length === 0) answer += '1\n';
    else answer += '0\n';
  } else if (command === 'front') {
    if (queue.length === 0) answer += '-1\n';
    else answer += queue[0] + '\n';
  } else if (command === 'back') {
    if (queue.length === 0) answer += '-1\n';
    else answer += queue[queue.length - 1] + '\n';
  }
}

console.log(answer);