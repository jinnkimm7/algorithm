import java.util.*;

class Solution {
    public int solution(int[][] maps) {
        int[][] visited = new int[maps.length][maps[0].length];
        int[] dx = {1, -1, 0, 0};
        int[] dy = {0, 0, 1, -1};
        
        bfs(new int[]{0, 0}, maps, visited, dx, dy);
        
        int answer = visited[maps.length - 1][maps[0].length - 1];
        
        return answer == 0 ? -1 : answer;
    }
    
    void bfs(int[] start, int[][] maps, int[][] visited, int[] dx, int[] dy) {
        Queue<int[]> q = new LinkedList<>();
        q.offer(start);
        visited[start[0]][start[1]] = 1;
        
        while(!q.isEmpty()) {
            int[] current = q.poll();
            int currentX = current[0];
            int currentY = current[1];
            
            for(int i = 0; i < 4; i++) {
                int nextX = currentX + dx[i];
                int nextY = currentY + dy[i];
                
                if(nextX >= 0 && nextX < maps.length && nextY >= 0 && nextY < maps[0].length && maps[nextX][nextY] == 1 && visited[nextX][nextY] == 0) {
                    visited[nextX][nextY] = visited[currentX][currentY] + 1;
                    q.offer(new int[]{nextX, nextY});
                }
            }
            
        }       
    }
}