package dfs;

import java.util.ArrayList;
import java.util.Scanner;

public class B_2606 {
    static int n; // 컴퓨터의 개수
    static int m; // 간선의 수
    static boolean[] visited;
    static ArrayList<ArrayList<Integer>> graph = new ArrayList<>();
    static int answer;

    static void dfs(int start, boolean[] visited,ArrayList<ArrayList<Integer>> graph) {
        visited[start] = true;
        answer++;

        for (int next : graph.get(start)) {
            if(!visited[next]) dfs(next, visited, graph);
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        visited = new boolean[n + 1];

        for (int i = 0; i <= n; i++) {
            graph.add(new ArrayList<Integer>());
        }
        for (int i = 0; i < m; i++) {
            int x = sc.nextInt();
            int y = sc.nextInt();

            graph.get(x).add(y);
            graph.get(y).add(x);
        }

        dfs(1, visited, graph);

        System.out.println(answer - 1);
    }
}