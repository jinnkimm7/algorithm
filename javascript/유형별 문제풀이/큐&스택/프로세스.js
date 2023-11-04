// Lv2
// https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

function solution(priorities, location) {
  let answer = 0;

  const queue = priorities.map((priority, index) => [priority, index]);

  priorities.sort((a, b) => a - b);

  let top_priority = priorities[priorities.length - 1];
  while (queue.length !== 0) {
    top_priority = priorities[priorities.length - 1];
    const [priority, index] = queue.shift();

    if (priority === top_priority) {
      answer++;
      priorities.pop();
      if (location === index) {
        return answer;
      }
    } else {
      queue.push([priority, index]);
    }
  }
}