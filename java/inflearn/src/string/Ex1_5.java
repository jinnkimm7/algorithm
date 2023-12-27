package string;

import java.util.Scanner;

public class Ex1_5 {
    public String solution(String str) {
        String answer = "";
        char[] chars = str.toCharArray();
        int l = 0, r = chars.length - 1;

        while (l < r) {
            if (Character.isAlphabetic(chars[l]) && Character.isAlphabetic(chars[r])) {
                char temp = chars[l];
                chars[l] = chars[r];
                chars[r] = temp;
                l++;
                r--;
            } else if(!Character.isAlphabetic(chars[l])) l++;
            else if(!Character.isAlphabetic(chars[r])) r--;
        }

        return String.valueOf(chars);
    }
    public static void main(String[] args) {
        Ex1_5 main = new Ex1_5();
        Scanner sc = new Scanner(System.in);
        String input = sc.next();

        System.out.println(main.solution(input));
    }
}
