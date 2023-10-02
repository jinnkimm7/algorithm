function solution(routes) {
  let answer = 1;
  routes.sort((a, b) => a[0] - b[0]);
  let camera = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    const [start, end] = routes[i];

    if (camera >= start) {
      if (camera >= end) {
        camera = end;
      }
    } else {
      answer += 1;
      camera = end;
    }
  }
  return answer;
}