// https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

// 첫 풀이 30/100
function solution(people, limit) {
  let answer = 0;

  people = people.sort((a, b) => b - a);

  while (people.length !== 0) {
    let temp = limit;
    let person = people.pop();
    temp = temp - person;
    person = people.pop();
    temp = temp - person;

    if (temp < 0) {
      people.push(person);
      answer++;
    } else answer++;
  }

  return answer;
}

function solution2(people, limit) {
  let answer = 0;
  people = people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++, answer++) {
    if (people[i] + people[j] <= limit) j--;
  }

  return answer;
}