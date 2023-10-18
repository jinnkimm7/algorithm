function solution(n, edge) {
  var answer = 0;

  const graph = [];
  for (let i = 0; i <= n; i++) graph.push([]);
  for (let i = 0; i < edge.length; i++) {
    const [x, y] = edge[i];
    graph[x].push(y);
    graph[y].push(x);
  }

  const visited = new Array(n + 1).fill(-1);

  const bfs = (start) => {
    const queue = [];
    queue.push(start);
    visited[start] = 0;

    while (queue.length !== 0) {
      const now = queue.shift();

      for (let next of graph[now]) {
        if (visited[next] === -1) {
          queue.push(next);
          visited[next] = visited[now] + 1;
        }
      }
    }
  }

  bfs(1);

  const max = Math.max(...visited);

  return visited.filter(el => el === max).length;
}