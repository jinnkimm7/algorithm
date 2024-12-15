class Solution {
    public String solution(String my_string, String alp) {
        String answer = "";
        
        char[] chArr = my_string.toCharArray();
        
        for(char ch : chArr) {
            if(ch == alp.charAt(0)) answer += Character.toUpperCase(ch);
            else answer += ch;
        }
        
        return answer;
    }
}