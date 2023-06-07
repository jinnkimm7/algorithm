const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

let totalGrade = 0;
let totalCredit = 0;

for (let i = 0; i < 20; i++) {
  const credit = Number(input[i].split(' ')[1]);
  let grade = input[i].split(' ')[2];

  switch (grade) {
    case 'A+':
      grade = 4.5;
      break;
    case 'A0':
      grade = 4;
      break;
    case 'B+':
      grade = 3.5;
      break;
    case 'B0':
      grade = 3;
      break;
    case 'C+':
      grade = 2.5;
      break;
    case 'C0':
      grade = 2;
      break;
    case 'D+':
      grade = 1.5;
      break;
    case 'D0':
      grade = 1;
      break;
    case 'F':
      grade = 0;
      break;
    case 'P':
      continue;
  }
  totalGrade += credit * grade;
  totalCredit += credit;
}

console.log((totalGrade / totalCredit).toFixed(6));