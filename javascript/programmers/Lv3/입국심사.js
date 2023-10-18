function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b);

  let start = 1;
  let end = sortedTimes[sortedTimes.length - 1] * n;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    const count = times.reduce((ac, time) => ac + parseInt(mid / time), 0);

    if (n > count) start = mid + 1;
    else end = mid - 1;
  }
  return start;
}