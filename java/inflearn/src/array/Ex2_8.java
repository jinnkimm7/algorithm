package array;

import java.util.*;

public class Ex2_8 {
    public int[] solution(int[] scores) {
        int[] answer = new int[scores.length];

        for (int i = 0; i < scores.length; i++) {
            int currentScore = scores[i];
            int rank = 1;
            for (int j = 0; j < scores.length; j++) {
                if (i == j) continue;

                if (scores[j] > currentScore) {
                    rank++;
                }
            }
            answer[i] = rank;
        }

        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] koreanScores = new int[n];

        for (int i = 0; i < n; i++) {
            koreanScores[i] = sc.nextInt();
        }

        Ex2_8 main = new Ex2_8();
        for (int rank : main.solution(koreanScores)) {
            System.out.print(rank + " ");
        }
    }
}
