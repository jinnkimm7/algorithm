const fs = require('fs');
const input = fs.readFileSync('/Users/jin/Documents/Study/algorithm/javascript/baekjoon/input.txt').toString().split('\n');

// 자기 자신을 선택하거나, 사이클의 그래프를 이루거나.

let testCases = Number(input[0]);

let line = 1;
while (testCases--) {
  const n = Number(input[line]);
  line++;
  const graph = [0, ...input[line].split(' ').map(Number)];
  const visited = new Array(n + 1).fill(false);
  const finished = new Array(n + 1).fill(false);
  const result = [];

  for (let x = 1; x <= n; x++) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }

  line++;
  console.log(n - result.length);
}

function dfs(x, graph, visited, finished, result) {
  visited[x] = true; // 현재 노드 방문처리
  let y = graph[x]; // 다음 노드
  if (!visited[y]) { // 다음 노드를 방문한적이 없다면,
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) { // 다음 노드를 방문한적이 있지만, 완료되지 않았다면,
    // 사이클이 발생한 것이므로 사이클에 포함된 노드를 저장한다.
    while (y !== x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
}
