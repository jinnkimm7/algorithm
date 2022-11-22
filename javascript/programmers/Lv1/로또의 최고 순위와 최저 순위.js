// https://school.programmers.co.kr/learn/courses/30/lessons/77484#fn1

function solution(lottos, win_nums) {
  const correctNums = lottos.filter(v => win_nums.includes(v)).length;
  const unknownNums = lottos.filter(v => v === 0).length;

  const rank = [6, 6, 5, 4, 3, 2, 1];

  const highest = correctNums + unknownNums;
  const lowest = correctNums;

  return [rank[highest], rank[lowest]];
}