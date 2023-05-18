const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  const arr = input[i].split(' ').map(v => Number(v));

  const number = arr[0]; // 학생 수
  const scores = arr.slice(1, arr.length); // 학생들의 점수

  const avg = scores.reduce((a, b) => a + b, 0) / number;

  let aboveAvgCount = 0; // 평균이상인 학생 수
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > avg) aboveAvgCount++;
  }

  const answer = `${(aboveAvgCount / number * 100).toFixed(3)}%`;
  console.log(answer);
}