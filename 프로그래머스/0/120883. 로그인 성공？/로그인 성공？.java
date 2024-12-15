class Solution {
    public String solution(String[] id_pw, String[][] db) {
        String answer = "";
        
        for(String[] el : db) {
            String id = el[0];
            String pw = el[1];
            
            if(id.equals(id_pw[0]) && pw.equals(id_pw[1])) {
                answer = "login";
                break;
            } else if(id.equals(id_pw[0]) && !pw.equals(id_pw[1])) {
                answer = "wrong pw";
                break;
            } else answer = "fail";
        }
        
        
        return answer;
    }
}