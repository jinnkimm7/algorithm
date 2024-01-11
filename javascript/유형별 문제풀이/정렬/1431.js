// 실버 3
// https://www.acmicpc.net/problem/1431

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

const n = Number(input[0]);

const serialNums = [];
for (let i = 1; i <= n; i++) {
  serialNums.push(input[i]);
}

const mapped = serialNums.map((num) => {
  const temp = num.split('');
  let sum = 0;
  for (let i = 0; i < temp.length; i++) {
    if (!isNaN(Number(temp[i]))) {
      sum += Number(temp[i]);
    }
  }
  return [num.length, sum, num];
});

mapped.sort((a,b) => {
  if(a[0] > b[0]) return 1;
  else if(a[0] < b[0]) return -1;
  else {
    if(a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    else {
      if(a[2] > b[2]) return 1;
      else if(a[2] < b[2]) return -1;
    }
  }
});

for (let [len, sum, num] of mapped) {
  console.log(num);
}