// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let answer = 0;
  const len = p.length;
  let temp = [];

  t.split('')
    .map((v, i) => temp.push(t.slice(i, (len + i))));

  temp = temp.filter(v => v.length === len).map(v => v * 1);

  temp.map(v => {
    if (parseInt(p) >= v) answer++
  });

  return answer;
}