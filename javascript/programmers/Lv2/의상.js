// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

function solution(clothes) {
  const map = new Map();

  clothes.forEach(cloth => {
    const [name, type] = cloth;
    if (!map.get(type)) {
      map.set(type, 1);
    } else {
      map.set(cloth[1], map.get(type) + 1);
    }
  });

  let answer = 1;
  for (let [key, value] of map) {
    answer *= value + 1;
  }

  return answer - 1;
}