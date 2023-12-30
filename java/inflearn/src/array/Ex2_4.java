package array;

import java.util.Scanner;

public class Ex2_4 {
    public int[] solution(int n) {
        int[] answer = new int[n];
        answer[0] = 1;
        answer[1] = 1;

        for (int i = 2; i < n; i++) {
            answer[i] = answer[i - 1] + answer[i - 2];
        }

        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        Ex2_4 main = new Ex2_4();

        for (int i : main.solution(n)) {
            System.out.print(i + " ");
        }
    }
}
