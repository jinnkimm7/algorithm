package string;

import java.util.ArrayList;
import java.util.Scanner;

public class Ex1_10 {
    public int[] solution(String s, String t) {
        int[] answer = new int[s.length()];
        char targetChar = t.charAt(0);

        ArrayList<Integer> targetLocations = new ArrayList<>();
        for (int i = 0; i < s.length(); i++) {
            char current = s.charAt(i);
            if (current == targetChar) {
                targetLocations.add(i);
            }
        }

        for (int i = 0; i < s.length(); i++) {
            int min = Integer.MAX_VALUE;
            for (int j = 0; j < targetLocations.size(); j++) {
                int dist = Math.abs(i - targetLocations.get(j));
                min = Math.min(dist, min);
            }
            answer[i] = min;
        }
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String t = sc.next();

        Ex1_10 main = new Ex1_10();
        for (int i : main.solution(s, t)) {
            System.out.print(i + " ");
        }
    }
}
