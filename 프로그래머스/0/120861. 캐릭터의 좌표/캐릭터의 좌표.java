class Solution {
    public int[] solution(String[] keyinput, int[] board) {
        int[] answer = {0, 0};
        
        int max_x = board[0] / 2;
        int min_x = -(board[0] / 2);
        int max_y = board[1] / 2;
        int min_y = -(board[1] / 2);
        
        for(String key : keyinput) {
            if (key.equals("up") && max_y >= answer[1] + 1) {
                answer[1] = answer[1] + 1;
            } else if (key.equals("down") && min_y <= answer[1] - 1) {
                answer[1] = answer[1] - 1;
            } else if (key.equals("left") && min_x <= answer[0] - 1) {
                answer[0] = answer[0] - 1;
            } else if (key.equals("right") && max_x >= answer[0] + 1) {
                answer[0] = answer[0] + 1;       
            }
        }
        
        return answer;
    }
}