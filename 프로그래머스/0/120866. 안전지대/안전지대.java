import java.util.*;

class Solution {
    public int solution(int[][] board) {
        int answer = 0;
        
        // 폭탄의 위치 파악 하기
        List<int[]> bomb_location = new ArrayList<>();
        
        for(int i = 0; i < board.length; i++) {
            for(int j = 0; j < board[i].length; j++) {
                if(board[i][j] == 1) bomb_location.add(new int[]{i, j});
            }
        }
        
        // 폭탄 주변에 위험 표시 하기
        for(int i = 0; i < bomb_location.size(); i++) {
            int cur_x = bomb_location.get(i)[0];
            int cur_y = bomb_location.get(i)[1];
            
            int[] dx = {0, 0, -1, 1, 1, 1, -1, -1};
            int[] dy = {1, -1, 0, 0, 1, -1, -1, 1};
            
            int limit = board.length;
            
            for(int j = 0; j < 8; j++) {
                int nx = cur_x + dx[j];
                int ny = cur_y + dy[j];
                
                if(nx >= 0 && ny >= 0 && nx < limit && ny < limit && board[nx][ny] == 0) {
                    board[nx][ny] = 2;
                }
            }
        }
     
        // 안전지대(0) 개수 세기
        for(int i = 0; i < board.length; i++) {
            for(int j = 0; j < board.length; j++) {
                if(board[i][j] == 0) answer++;
            }
        }
        
        return answer;
    }
}