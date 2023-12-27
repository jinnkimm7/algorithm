package string;

import java.util.*;
public class Ex1_4 {
    public ArrayList<String> solution(String[] inputs) {
        ArrayList<String> answer = new ArrayList<>();
        for (String input : inputs) {
            StringBuilder sb = new StringBuilder(input).reverse();
            answer.add(sb.toString());
        }
        return answer;
    }
    public static void main(String[] args) {
        Ex1_4 main = new Ex1_4();
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        String[] strArr = new String[n];
        for (int i = 0; i < n; i++) {
            strArr[i] = sc.next();
        }

        for (String str : main.solution(strArr)) {
            System.out.println(str);
        }
    }
}
