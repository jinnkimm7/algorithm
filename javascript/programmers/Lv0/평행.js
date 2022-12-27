// https://school.programmers.co.kr/learn/courses/30/lessons/120875

function solution(dots) {
  const inclinations = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i; j < dots.length; j++) {
      if (i === j) continue;

      const inclination = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);

      if (inclinations.includes(inclination)) return 1;
      else inclinations.push(inclination);
    }
  }

  return 0;
}