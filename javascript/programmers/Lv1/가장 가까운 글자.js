//https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution1(s) {
  const answer = [];
  const temp = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!temp.includes(s[i])) {
      temp.push(s[i]);
      answer.push(-1);
    } else {
      const temp2 = temp.lastIndexOf(s[i]);
      answer.push(temp.length - temp2);
      temp.push(s[i]);
    }
  }

  return answer;
}

const solution2 = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
