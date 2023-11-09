// 실버 3
// https://www.acmicpc.net/problem/1431

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i]);

arr = arr.map(el => {
  const len = el.length;
  let sum = 0;

  el.split('').forEach((char) => {
    if (parseInt(char)) {
      sum += parseInt(char);
    }
  });

  return [el, len, sum];
});

arr.sort((a, b) => {
  // 1. 길이로 오름차순 정렬, 
  if (a[1] > b[1]) return 1;
  else if (a[1] < b[1]) return -1;
  else {
    // 2. 합으로 오름차순 정렬,
    if (a[2] > b[2]) return 1;
    else if (a[2] < b[2]) return -1;
    // 3. 사전순으로 오름차순 정렬,
    else {
      if (a[0] > b[0]) return 1;
      else return -1;
    }
  }

})

let answer = '';
for (let [el, len, sum] of arr) {
  answer += el + '\n';
}
console.log(answer);
