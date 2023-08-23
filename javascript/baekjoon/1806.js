const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// 수열의 개수: n, 이상이 되어야할 합: s
const [n, s] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

let answer = 1e9;
let start = 0;
let end = 0;
let sum = arr[0];

while(true) {
  while (end < n - 1 && sum < s) {
    end++;
    sum += arr[end];
  }

  if (sum >= s) {
    answer = Math.min(answer, end - start + 1);
  }

  sum -= arr[start];
  start++;
  
  if (start >= n) break;
}

if (answer === 1e9) answer = 0;
console.log(answer);