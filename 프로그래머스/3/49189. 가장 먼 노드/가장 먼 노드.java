import java.util.*;

class Solution {
    public int solution(int n, int[][] edge) {
        int answer = 0;
        
        int[] visited = new int[n + 1];       
        ArrayList<ArrayList<Integer>> graph = new ArrayList<>();
        
        for(int i = 0; i <= n; i++) {
            graph.add(new ArrayList<Integer>());
        }    
        
        for(int i = 0; i < edge.length; i++) {
            int x = edge[i][0];
            int y = edge[i][1];
            
            graph.get(x).add(y);
            graph.get(y).add(x);
        }
        
        bfs(graph, visited, 1);

        int max = Integer.MIN_VALUE;

        for(int i = 0; i < visited.length; i++) {
            max = Math.max(visited[i], max);
        }
        
        for(int i = 0; i < visited.length; i++) {
            if(visited[i] == max) answer++;
        }
        
        return answer;
    }
    
    void bfs(ArrayList<ArrayList<Integer>> graph, int[] visited, int start) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(start);
        visited[start] = 1;
        
        while(!q.isEmpty()) {
            int current = q.poll();
            
            for(int i = 0; i < graph.get(current).size(); i++) {
                int next = graph.get(current).get(i);
                
                if(visited[next] == 0) {
                    q.offer(next);
                    visited[next] = visited[current] + 1;
                }
            }
        }
        
    }    
}