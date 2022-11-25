// https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const aAbs = Math.abs(a - n);
    const bAbs = Math.abs(b - n);

    if (aAbs === bAbs) return b - a;

    return aAbs - bAbs;
  })
}