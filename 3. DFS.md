# DFS

- DFS(Depth First Search)는 `깊이 탐색`이라고도 불리며, 그래프에서 `깊은 부분을 우선적으로 탐색하는 알고리즘`이다.
- DFS는 `스택 자료구조(혹은 재귀함수)를 이용`하며 구체적인 동작은 다음과 같다.
  - 탐색 시작 노드를 스택에 삽입하고 방문 처리한다.
  - 스택의 최상단 노드에 방문하지 않은 인접한 노드가 하나라도 있으면 그 노드를 스택에 넣고 방문 처리한다. 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼낸다.
  - 더 이상 2번의 과정을 수행할 수 없을때까지 반복한다.

## 소스코드 예제
```java
import java.util.*;

public class Main{
  public static boolean[] visited = new boolean[9];
  public static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();

  // DFS 함수 정의
  public static void dfs(int x) {
    //현재 노드를 방문 처리
    visited[x] = true;
    System.out.println(x + " ");
    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for(int i = 0; i < graph.get(x).size(); i++) {
      int y = graph.get(x).get(i);
      if(!visited[y]) dfs(y);
    }
  }

  public static void main(String[] args) {
     // 그래프 초기화
    for (int i = 0; i < 9; i++) {
      graph.add(new ArrayList<Integer>());
    }

    // 노드 1에 연결된 노드 정보 저장 
    graph.get(1).add(2);
    graph.get(1).add(3);
    graph.get(1).add(8);
        
    // 노드 2에 연결된 노드 정보 저장 
    graph.get(2).add(1);
    graph.get(2).add(7);
        
    // 노드 3에 연결된 노드 정보 저장 
    graph.get(3).add(1);
    graph.get(3).add(4);
    graph.get(3).add(5);
        
    // 노드 4에 연결된 노드 정보 저장 
    graph.get(4).add(3);
    graph.get(4).add(5);
        
    // 노드 5에 연결된 노드 정보 저장 
    graph.get(5).add(3);
    graph.get(5).add(4);
        
    // 노드 6에 연결된 노드 정보 저장 
    graph.get(6).add(7);
        
    // 노드 7에 연결된 노드 정보 저장 
    graph.get(7).add(2);
    graph.get(7).add(6);
    graph.get(7).add(8);
        
    // 노드 8에 연결된 노드 정보 저장 
    graph.get(8).add(1);
    graph.get(8).add(7);

    dfs(1);
  }
}
```

## 문제
- [음료수 얼려 먹기](https://github.com/jinnkimm7/problem-solving/blob/main/java/algorithm/src/algorithm/DFS1.java)