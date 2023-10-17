const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
const arrA = input[1].split(' ').map(Number);

const d = [0];

for (let i = 0; i < n; i++) {
  const el = arrA[i];

  if (d[d.length - 1] < el) d.push(el);
  else {
    const index = lowerBound(d, el, 0, d.length);
    d[index] = el;
  }
}

console.log(d.length - 1);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}