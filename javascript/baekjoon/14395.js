const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const [s, t] = input[0].split(' ').map(Number);

const queue = [[s, '']];
const visited = new Set([s]);
let found = false;

if (s === t) {
  console.log(0);
}

while (queue.length !== 0) {
  let [val, opers] = queue.shift();

  if (val > 1e9) continue; // 범위를 벗어나는 경우
  if (val === t) { // 목표값에 도달한 경우
    console.log(opers);
    found = true;
    break;
  }

  for (const oper of ['*', '+', '-', '/']) {
    let nextVal = val;
    if (oper === '*') nextVal *= val;
    if (oper === '+') nextVal += val;
    if (oper === '-') nextVal -= val;
    if (oper === '/') nextVal /= val;
    if (!visited.has(nextVal)) {
      queue.push([nextVal, opers + oper]);
      visited.add(nextVal);
    }
  }
}

if (!found) console.log(-1);