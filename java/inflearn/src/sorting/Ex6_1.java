package sorting;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Ex6_1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        Ex6_1 main = new Ex6_1();
//        solution1
//        for (int num : main.solution1(arr)) {
//            System.out.print(num + " ");
//        }

//        solution2
        for (int num : main.solution2(arr)) {
            System.out.print(num + " ");
        }

    }

    public int[] solution1(int[] arr) {
        int[] answer = new int[arr.length];
        ArrayList<Integer> list = new ArrayList<>();
        for (int num : arr) {
            list.add(num);
        }

        Collections.sort(list);

        for (int i = 0; i < list.size(); i++) {
            answer[i] = list.get(i);
        }

        return answer;
    }

    public int[] solution2(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIdx = i;
            int minValue = arr[i];
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < minValue) {
                    minValue = arr[j];
                    minIdx = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
        return arr;
    }
}
