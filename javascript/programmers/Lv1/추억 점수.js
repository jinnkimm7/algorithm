// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  var answer = [];
  const obj = {};

  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  return photo.map(arr => arr.reduce((a, c) => a + (obj[c] || 0), 0));
}