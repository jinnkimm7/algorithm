import java.util.*;

class Solution {
    public int solution(int[] array) {
        int answer = 0;
        
        String tmp = Arrays.toString(array);
        
        for(int i = 0; i < tmp.length(); i++) {
            if(tmp.charAt(i) == '7') answer++;
        }
        
        return answer;
    }
}