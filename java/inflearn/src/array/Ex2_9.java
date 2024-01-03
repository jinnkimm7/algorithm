package array;

import java.util.Scanner;

public class Ex2_9 {
    public int solution(int[][] numArr) {
        int answer = 0;

        for (int i = 0; i < numArr.length; i++) {
            int sumCol = 0;
            int sumRow = 0;
            for (int j = 0; j < numArr.length; j++) {
                sumCol += numArr[j][i];
                sumRow += numArr[i][j];
            }
            int max = Math.max(sumCol, sumRow);
            answer = Math.max(answer, max);
        }

        int sum1 = 0, sum2 = 0;
        for (int i = 0; i < numArr.length; i++) {
            sum1 += numArr[i][i];
            sum2 += numArr[i][numArr.length - 1 - i];
        }
        int max = Math.max(sum1, sum2);
        answer = Math.max(answer, max);

        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int[][] numArr = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                numArr[i][j] = sc.nextInt();
            }
        }

        Ex2_9 main = new Ex2_9();
        System.out.println(main.solution(numArr));
    }
}
