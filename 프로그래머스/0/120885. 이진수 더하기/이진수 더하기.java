class Solution {
    public String solution(String bin1, String bin2) {
        String answer = "";
        
        int tmp1 = Integer.parseInt(bin1, 2);
        int tmp2 = Integer.parseInt(bin2, 2);
        
        int sum = tmp1 + tmp2;
        
        answer = Integer.toBinaryString(sum);
        
        return answer;
    }
}