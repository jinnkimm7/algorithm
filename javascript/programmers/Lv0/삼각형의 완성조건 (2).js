// https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  const a = sides[1] - sides[0];
  const b = sides[1] + sides[0];

  return b - a - 1;
}
