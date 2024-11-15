class Solution {
    public int solution(int n, int[][] computers) {
        int answer = 0;
        
        boolean[] visited = new boolean[n];
        
        for(int i = 0; i < n; i++) {
            if(!visited[i]) {
                answer++;
                dfs(i, visited, computers);
            }
        }
        
        return answer;
    }
    
    void dfs(int x, boolean[] visited, int[][] computers) {
        visited[x] = true;
        
        for(int i = 0; i < computers[x].length; i++) {            
            if(computers[x][i] == 1 && !visited[i]) {
                dfs(i, visited, computers);
            }
        }
    }
}