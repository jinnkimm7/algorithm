function solution(a, b) {
  // 1. 기약 분수 만들기
  const gcb = (a, b) => {
    return (a % b === 0) ? b : gcb(b, a % b);
  }

  const gcb_value = gcb(a, b);
  b = b / gcb_value;

  // 2. 분모 소인수 분해 하기
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}