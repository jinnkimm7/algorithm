function solution(n, computers) {
  // 그래프 구현
  const graph = [];
  for (let i = 0; i <= n; i++) graph.push([]);
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[i].length; j++) {
      if (i === j) continue;
      if (computers[i][j] === 1) graph[i + 1].push(j + 1);
    }
  }

  const visited = [true, ...new Array(n).fill(false)];

  // dfs 구현
  const dfs = (start) => {
    visited[start] = true;
    for (let i of graph[start]) {
      if (!visited[i]) dfs(i);
    }
  }

  let answer = 0;
  // 모든 노드를 방문할 때까지, 반복문을 실행한다.
  while (visited.indexOf(false) !== -1) {
    const start = visited.indexOf(false);
    dfs(start);
    answer++;
  }

  return answer;
}