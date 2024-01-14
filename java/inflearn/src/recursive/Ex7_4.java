package recursive;

import java.util.Scanner;

public class Ex7_4 {
    static int[] fibo;
    public int solution(int n) {
        if(fibo[n] > 0) return fibo[n];
        if(n == 1) return fibo[1] = 1;
        else if(n==2) return fibo[2] = 1;
        else {
            return fibo[n] = solution(n - 1) + solution(n - 2);
        }

    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Ex7_4 main = new Ex7_4();

        fibo = new int[n + 1];
        main.solution(n);
        for (int i = 1; i <= n; i++) {
            System.out.print(fibo[i] + " ");
        }
    }
}