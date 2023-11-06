// 실버 1
// https://www.acmicpc.net/problem/1697

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const dist = new Array(100001).fill(0);

const queue = [n];
dist[n] = 1;

while (queue.length !== 0) {
  const now = queue.shift();

  for (let next of [now - 1, now + 1, now * 2]) {
    if (dist[next] === 0) {
      dist[next] = dist[now] + 1;
      queue.push(next);
    }
  }
}

console.log(dist[k] - 1);