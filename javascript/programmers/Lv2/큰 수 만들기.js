// 시간 초과
// function solution(number, k) {
//   number = number.split('').map(n => n * 1);

//   let index = 0;
//   while(k !== 0) {
//       let start = number[index];
//       if(number[index] < number[index + 1]) {
//           number.splice(index, 1);
//           k--;
//           index = 0;
//       } else {
//           index++;
//       }
//   }

//   return number.join('');
// }

// N이 백만이면 O(N), O(Nlog N)
// 큰 값이 나오면 이전 값 중 더 작은 값은 전부다 삭제한다
// 즉 스택의 바닥에서부터 탑은 큰 수부터 작은 수로 나열이 되야한다!
function solution(number, k) {
  const stack = [];

  for (const item of number) {
    while (k > 0 && stack[stack.length - 1] < item) {
      k--;
      stack.pop();
    }
    stack.push(item);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }

  return stack.join('');
}