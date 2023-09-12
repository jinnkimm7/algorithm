function solution(maps) {
  const n = maps.length; // 세로
  const m = maps[0].length; // 가로

  // 움직일 수 있는 방향: 상하좌우
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const bfs = () => {
    const queue = [[0, 0]];

    while (queue.length !== 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        // 경로를 벗어난 경우, 움직인 방향이 벽인 경우는 제외
        if (nx >= n || nx <= -1 || ny >= m || ny <= -1) continue;
        if (maps[nx][ny] === 0) continue;
        // 이동할 수 있다면, 1을 증가시키고, queue에 넣어준다.
        if (maps[nx][ny] === 1) {
          maps[nx][ny] = maps[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  bfs();
  console.log(maps);
  return maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
}

solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]);