// Lv2
// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
  const answer = [];

  const days = [];
  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (maxDay < days[i]) {
      answer.push(count);
      count = 1;
      maxDay = days[i];
    } else {
      count++;
    }
  }
  answer.push(count);

  return answer;
}

function solution(progresses, speeds) {
  const answer = [];

  const days = [];
  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let stack = [];

  while (days.length !== 0) {
    const head = stack[0];
    const day = days.shift();

    if (!head) stack.push(day);
    else {
      if (head < day) {
        answer.push(stack.length);
        stack = [];
        stack.push(day);
      } else {
        stack.push(day);
      }
    }

  }

  if (stack.length) answer.push(stack.length);
  return answer;
}