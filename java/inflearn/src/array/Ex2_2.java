package array;


import java.util.*;

public class Ex2_2 {
    public int solution(int n, int[] heights) {
        int answer = 0;
        int max = Integer.MIN_VALUE;

        for (int height : heights) {
            if (height > max) {
                answer++;
                max = height;
            }
        }

        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] heights = new int[n];
        for (int i = 0; i < n; i++) {
            heights[i] = sc.nextInt();
        }

        Ex2_2 main = new Ex2_2();

        System.out.println(main.solution(n, heights));
    }
}