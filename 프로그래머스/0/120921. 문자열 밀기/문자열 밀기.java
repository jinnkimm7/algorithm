class Solution {
    public int solution(String A, String B) {
        String str = B + B;
        
        if(A.equals(B)) return 0;
        else return str.indexOf(A);
    }
}