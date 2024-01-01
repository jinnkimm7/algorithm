package array;

import java.util.*;

public class Ex2_7 {
    public int solution(int[] scores) {
        int answer = 0;

        int bonus = 1;
        for (int i = 0; i < scores.length; i++) {
            if (scores[i] == 1) {
                answer += bonus * 1;
                bonus += 1;
            } else {
                bonus = 1;
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] scores = new int[n];

        for (int i = 0; i < n; i++) {
            scores[i] = sc.nextInt();
        }

        Ex2_7 main = new Ex2_7();
        System.out.println(main.solution(scores));
    }
}
