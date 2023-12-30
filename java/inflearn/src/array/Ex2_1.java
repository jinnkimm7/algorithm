package array;

import java.util.*;

public class Ex2_1 {
    public ArrayList<Integer> solution(ArrayList<Integer> list) {
        ArrayList<Integer> answer = new ArrayList<>();

        answer.add(list.get(0));
        for (int i = 1; i < list.size(); i++) {
            Integer prev = list.get(i - 1);
            Integer curr = list.get(i);
            if (curr > prev) {
                answer.add(curr);
            }
        }

        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Integer> list = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            list.add(sc.nextInt());
        }

        Ex2_1 main = new Ex2_1();
        for (int el : main.solution(list)) {
            System.out.print(el + " ");
        }
    }
}
