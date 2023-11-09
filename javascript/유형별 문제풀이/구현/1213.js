// 실버 3
// https://www.acmicpc.net/problem/1213

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');
const str = input[0];

const map = new Map();
for (let char of str) {
  if (!map.get(char)) {
    map.set(char, 1);
  } else {
    map.set(char, map.get(char) + 1);
  }
}

const sortedArr = [...map].sort();

const oddArr = sortedArr.filter((el, i) => el[1] % 2 !== 0);

if (oddArr.length > 1) console.log("I'm Sorry Hansoo");
else {
  let answerStr = '';
  const oddIndex = sortedArr.findIndex(el => el[1] % 2 !== 0);
  sortedArr.forEach((el, i) => {
    const [char, totalCount] = el;
    answerStr += char.repeat(parseInt(totalCount / 2));
  })
  let answerStrReversed = answerStr.split('').reverse().join('');

  if (oddIndex !== -1) {
    console.log(answerStr + sortedArr[oddIndex][0] + answerStrReversed);
  } else {
    console.log(answerStr + answerStrReversed);
  }
}