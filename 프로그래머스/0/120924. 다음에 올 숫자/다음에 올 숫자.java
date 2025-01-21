class Solution {
    public int solution(int[] common) {
        // 등차일 경우,
        if (common[1] - common[0] == common[2] - common[1]) {
            return common[common.length - 1] + common[1] - common[0];
        } else { 
        // 등비일 경우,
            return common[common.length - 1] * (common[1] / common[0]);
        }
    }
}