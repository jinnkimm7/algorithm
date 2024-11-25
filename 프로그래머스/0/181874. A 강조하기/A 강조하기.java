class Solution {
    public String solution(String myString) {
        StringBuilder sb = new StringBuilder();
        
        for (int i = 0; i < myString.length(); i++) {
            char ch = myString.charAt(i);
            
            if (ch == 'a') sb.append(Character.toUpperCase(ch));
            else if (ch == 'A') sb.append(ch);
            else sb.append(Character.toLowerCase(ch));
        }
        
        return sb.toString();
    }
}