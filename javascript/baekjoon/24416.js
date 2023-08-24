const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

// 일반적인 피보나치
let count_fibonacci = 0;
const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    count_fibonacci += 1;
    return;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
fibonacci(n);

// 다이나믹 프로그래밍을 적용한 피보나치
const memo = new Array(n + 1).fill(0);
memo[1] = 1;
memo[2] = 1;
let count_fibonacciDP = 0;

for (let i = 3; i <= n; i++) {
  memo[i] = memo[i - 1] + memo[i - 2];
  count_fibonacciDP += 1;
}

let answer = count_fibonacci + ' ' + count_fibonacciDP;

console.log(answer);