class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        
        int side1 = Math.max(sides[0], sides[1]);
        int side2 = Math.min(sides[0], sides[1]);
        
        answer += side1 - (side1 - + side2); 
        answer += side2 - 1;
        
        return answer;
    }
}