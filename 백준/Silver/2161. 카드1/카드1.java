import java.util.*;

class Main {
  static int n;
  static Queue<Integer> q;

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    n = sc.nextInt();
    q = new LinkedList<>();

    for(int i = 1; i <= n; i++) {
      q.offer(i);
    }

    while(!q.isEmpty()) {
      try {
      int num1 = q.poll();
      System.out.print(num1 + " ");

      int num2 = q.poll();
      q.offer(num2);
      } catch(NullPointerException e) {
        break;
      }
    }
  }
}