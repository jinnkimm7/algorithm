package array;

import java.util.*;

public class Ex2_3 {
    public char[] solution(int n, int[] dataA, int[] dataB) {
        char[] answer = new char[n];

        for (int i = 0; i < n; i++) {
            int a = dataA[i];
            int b = dataB[i];

            if (a == b) {
                answer[i] = 'D';
            } else if (a == 1 && b == 2) {
                answer[i] = 'B';
            } else if (a == 1 && b == 3) {
                answer[i] = 'A';
            } else if (a == 2 && b == 1) {
                answer[i] = 'A';
            } else if (a == 2 && b == 3) {
                answer[i] = 'B';
            } else if (a == 3 && b == 1) {
                answer[i] = 'B';
            } else if (a == 3 && b == 2) {
                answer[i] = 'A';
            }
        }

        return answer;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        int[] b = new int[n];

        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        for (int i = 0; i < n; i++) {
            b[i] = sc.nextInt();
        }

        Ex2_3 main = new Ex2_3();
        for (char ch : main.solution(n, a, b)) {
            System.out.println(ch);
        }
    }
}
