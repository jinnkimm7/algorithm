class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        
        boolean isOdd1 = a % 2 == 0 ? false : true;
        boolean isOdd2 = b % 2 == 0 ? false : true;
        
        if(isOdd1 && isOdd2) answer = (a * a) + (b * b);
        else if(isOdd1 || isOdd2) answer = 2 * (a + b);
        else answer = Math.abs(a - b);
            
        return answer;
    }
}