// 골드 5
// https://www.acmicpc.net/problem/17609

const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

const n = Number(input[0]);

let answer = '';
for (let i = 1; i <= n; i++) {
  const str = input[i];
  if (isPalindrome(str)) answer += 0 + '\n';
  else { // 회문이 아닌 경우, 유사회문 찾기
    let isSimilarPalindrome = false;
    const len = str.length;
    for (let i = 0; i < parseInt(len / 2); i++) {
      if (str[i] !== str[len - 1 - i]) { // 대칭이 아닌경우,
        // 앞쪽에 있는 해당 원소를 제거하고 회문을 검사한다.
        if (isPalindrome(str.slice(0, i) + str.slice(i + 1, len))) isSimilarPalindrome = true;
        // 뒤쪽에 있는 해당 원소를 제거하고 회문을 검사한다.
        if (isPalindrome(str.slice(0, len - 1 - i) + str.slice(len - i, len))) isSimilarPalindrome = true;
        break;
      }
    }
    if (isSimilarPalindrome) answer += 1 + '\n';
    else answer += 2 + '\n';
  }
}

console.log(answer);