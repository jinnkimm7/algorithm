package recursive;

import java.util.Scanner;

public class Ex7_3 {
    public int solution(int n) {
        if (n <= 0) return 1;
        return n * solution(n - 1);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Ex7_3 main = new Ex7_3();
        System.out.println(main.solution(n));
    }
}