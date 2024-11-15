import java.util.*;

class Solution {
    public String[] solution(String[] str_list) {
        String[] answer = {};
        
        String dir = "";
        int idx = 0;
        
        for(int i = 0; i < str_list.length; i++) {
            if(str_list[i].equals("l") || str_list[i].equals("r")) {
                idx = i;
                dir = str_list[i];
                break;
            }
        }
        
        if(dir.equals("l")) {
            answer = Arrays.copyOfRange(str_list, 0, idx);
        } else if(dir.equals("r")) {
            answer = Arrays.copyOfRange(str_list, idx + 1, str_list.length);
        }
        
        return answer;
    }
}