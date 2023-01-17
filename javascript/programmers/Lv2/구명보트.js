// https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

function solution(people, limit) {
  var answer = 0;
  people = people.sort((a, b) => b - a);

  for (var i = 0, j = people.length - 1; i <= j; i++, answer++) {
    if (people[i] + people[j] <= limit) j--;
  }

  return answer;
}