class Solution {
    boolean solution(String s) {
        String[] strArr = s.split("");
        int count = 0;
        
        for(int i = 0; i < strArr.length; i++) {
            if(count == 0 && strArr[i].equals(")")) return false;
            
            if(strArr[i].equals("(")) count += 1;
            else count -= 1;
        }
        
        return count == 0 ? true : false;
    }
}