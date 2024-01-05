package string;

import java.util.Scanner;

public class Ex1_8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        Ex1_8 main = new Ex1_8();
        System.out.println(main.solution(str));
    }

    public String solution(String str) {
        str = str.toUpperCase().replaceAll("[^A-Z]", "");
        String reversed = new StringBuilder(str).reverse().toString();

        return str.equals(reversed) ? "YES" : "NO";
    }
}
