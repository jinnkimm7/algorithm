// https://school.programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

function solution1(strings, n) {
  return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}

function solution2(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
      else return 0;
    }

    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
  })
}