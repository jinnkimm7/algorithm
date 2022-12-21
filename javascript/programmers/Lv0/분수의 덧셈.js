// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(denum1, num1, denum2, num2) {
  const a = (denum1 * num2) + (denum2 * num1); // 분자
  const b = num1 * num2; // 분모

  // 통분
  const gcb = (a, b) => (a % b === 0) ? b : gcb(b, a % b);
  const gcb_value = gcb(a, b);

  return [a / gcb_value, b / gcb_value];
}