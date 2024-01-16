package dfs;

import java.util.ArrayList;
import java.util.Scanner;

public class Ex_1 {
    static int n;
    static int m;
    static ArrayList<ArrayList<Integer>> graph = new ArrayList<>();
    static int answer;

    public static boolean dfs(int x, int y, int n, int m, ArrayList<ArrayList<Integer>> graph) {
        if (x >= n || x <= -1 || y >= m || y <= -1) return false;
        if (graph.get(x).get(y) == 1) return false;
        if (graph.get(x).get(y) == 0) {
            graph.get(x).set(y, 1);
            dfs(x - 1, y, n, m, graph);
            dfs(x + 1, y, n, m, graph);
            dfs(x, y - 1, n, m, graph);
            dfs(x, y + 1, n, m, graph);
            return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();

        for (int i = 0; i < n; i++) graph.add(new ArrayList<>());
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                graph.get(i).add(sc.nextInt());
            }
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (dfs(i, j, n, m, graph)) {
                    answer++;
                }
            }
        }
        System.out.println(answer);
    }
}