// Lv3

function solution(n, times) {
  let answer = 0;

  times.sort((a, b) => a - b);
  const max = times[times.length - 1];
  let start = 1;
  let end = max * n;

  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    let checkedCount = 0;
    for (let time of times) {
      checkedCount += parseInt(mid / time);
    }

    if (checkedCount >= n) {
      end = mid - 1;
      answer = mid;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}