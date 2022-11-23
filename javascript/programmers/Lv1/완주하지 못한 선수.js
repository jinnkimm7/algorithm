// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution1(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// map을 이용해서 풀기
function solution2(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    if (!map.has(participant[i])) {
      map.set(participant[i], 1);
    } else {
      map.set(participant[i], map.get(participant[i]) + 1);
    }
  }

  for (let i = 0; i < completion.length; i++) {
    if (map.has(completion[i])) {
      map.set(completion[i], map.get(completion[i]) - 1);
    }
  }

  for (let i = 0; i < participant.length; i++) {
    if (map.get(participant[i]) === 1) return participant[i];
  }
}