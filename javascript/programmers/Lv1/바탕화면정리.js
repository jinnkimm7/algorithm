function solution(wallpaper) {
  let answer = [];

  const graph = wallpaper.map(line => line.split(''));
  const allDots = [];
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (graph[i][j] === '#') allDots.push([i, j]);
    }
  }

  const dotXs = [];
  const dotYs = [];

  for (let i = 0; i < allDots.length; i++) {
    const dot = allDots[i];
    const [x, y] = dot;
    dotXs.push(x);
    dotYs.push(y);
  }

  answer = [Math.min(...dotXs), Math.min(...dotYs), Math.max(...dotXs) + 1, Math.max(...dotYs) + 1];
  return answer;
}