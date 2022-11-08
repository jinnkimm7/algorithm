// https://school.programmers.co.kr/learn/courses/30/lessons/120854?language=javascript

function solution(strlist) {
  var answer = [];

  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }

  return answer;
}