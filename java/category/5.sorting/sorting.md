# 정렬 알고리즘
- 정렬(Sorting)이란 `데이터를 특정한 기준에 따라 나열하는 것`을 말한다.
- 일반적으로 문제 상황에 따라서 적절한 정렬 알고리즘이 공식처럼 사용된다.

## 1. 선택 정렬
- 처리되지 않은 데이터 중에서 `가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾸는 것을 반복`합니다.
- 시간 복잡도 : `O(N^2)`

```java
public class Main {
  public static void main(String[] args) {
    int n = 10;
    int[] arr = {7, 5, 9, 0, 3, 1, 6, 2, 4, 8};

    for(int i = 0; i < n; i ++) {
      int min_index = i; // 가장 작은 원소의 인덱스
      for(int j = i + 1; i < n; j++) {
        if(arr[min_index] > arr[j]) {
          min_index = j;
        }
      }
      // swap
      int temp = arr[i];
      arr[i] = arr[min_index];
      arr[min_index] = temp;
    }
    for(int i = 0; i < n; i++) {
      System.out.println(arr[i] + " ");
    }
  }
}
```

## 2. 삽입 정렬
- 처리되지 않은 데이터를 하나씩 골라 `적절한 위치에 삽입`한다.
- 선택 정렬에 비해 구현난이도가 높은 편이지만, 일반적으로 더 효율적으로 동작한다.
- 시간 복잡도 : `O(N^2)`
- 하지만, 현재 리스트의 데이터가 거의 정렬되어 있는 상태라면, 매우 빠르게 동작한다.
  - O(N)의 시간 복잡도를 가질 수 있다.


```java
public class Main {
  public static void main(String[] args) {
    int n = 10;
    int[] arr = {7, 5, 9, 0, 3, 1, 6, 2, 4, 8};
    for(int i = 0; i < n; i++) {
      // 인덱스 i부터 1까지 감소하며 반복하는 문법
      for(int j = i; j > 0; j--) {
        // 한 칸씩 왼쪽으로 이동
        if(arr[j] < arr[j - 1]) {
          // swap
          int temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
        }
        // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
        else break;
      }
    }
    for(int i = 0; i < n; i++) {
      System.out.print(arr[i] + " ");
    }
  }
}
```

## 3. 퀵 정렬
- `기준` 데이터를 설정하고, `그 기준보다 큰 데이터와 작은 데이터의 위치를 바꾸는 방법`이다.
- 일반적인 상황에서 가장 많이 사용되는 정렬 알고리즘 중 하나이다.
- 병합 정렬과 더불어 대부분의 프로그래밍 언어의 정렬 라이브러리의 근간이 되는 알고리즘이다.
- 가장 기본적인 퀵 정렬은 `첫번째 데이터를 기준 데이터(Pivot)로 설정`한다.
- 시간 복잡도 : `O(Nlog N)`
  - 하지만 최악의 경우 O(N^2)의 시간 복잡도를 갖는다.

```java
import java.util.*;

public class Main {

    public static void quickSort(int[] arr, int start, int end) {
        if (start >= end) return; // 원소가 1개인 경우 종료
        int pivot = start; // 피벗은 첫 번째 원소
        int left = start + 1;
        int right = end;
        while (left <= right) {
            // 피벗보다 큰 데이터를 찾을 때까지 반복
            while (left <= end && arr[left] <= arr[pivot]) left++;
            // 피벗보다 작은 데이터를 찾을 때까지 반복
            while (right > start && arr[right] >= arr[pivot]) right--;
            // 엇갈렸다면 작은 데이터와 피벗을 교체
            if (left > right) {
                int temp = arr[pivot];
                arr[pivot] = arr[right];
                arr[right] = temp;
            }
            // 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
            else {
                int temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
            }
        }
        // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
        quickSort(arr, start, right - 1);
        quickSort(arr, right + 1, end);
    }

    public static void main(String[] args) {
        int n = 10;
        int[] arr = {7, 5, 9, 0, 3, 1, 6, 2, 4, 8};

        quickSort(arr, 0, n - 1);

        for(int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
    }

}
```

## 4. 계수 정렬(Counting Sort)
- 계수 정렬은 특정한 조건이 부합할때만 사용할 수 있지만, `매우 빠르게 동작`하는 정렬 알고리즘이다.
  - 계수 정렬은 데이터의 크기 범위가 제한되어 정수형태로 표현할 수 있을 때 사용가능하다.
- 데이터의 개수가 N개, 데이터 중 최댓값이 K일때 최악의 경우에도 수행시간 `O(N + K)`를 보장한다.
- 때에 따라 심각한 비효율성을 초래한다.
  - 데이터가 0과 999,999 단 두개만 존재한다고 생각해보자
- `동일한 값을 가지는 데이터가 여러개 등장할때` 효과적으로 사용할 수 있다.

```java
public class Main {
  public static final int MAX_VALUE = 9;

  public static void main(String[] args) {
    int n = 15;
    // 모든 원소의 값이 0보다 크거나 같다고 가정
    int[] arr = {7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2};
    // 모든 범위를 포함하는 배열 선언(모든 값은 0으로 초기화) 
    int[] count = new int[MAX_VALUE + 1];

    for(int i = 0; i < n; i++) {
      count[arr[i]] += 1; // 각 데이터에 해당하는 인덱스의 값 증가
    }
    for(int i = 0; i <= MAX_VALUE; i++) { // 배열에 기록된 정렬 정보 확인
      for(int j = 0; j < count[i]; j++) {
        System.out.println(i + " "); // 띄어쓰기를 기준으로 등장한 횟수만큼 인덱스 출력
      }
    }
  }
}
```

## 정렬 알고리즘 비교하기
|정렬 알고리즘|평균 시간 복잡도|공간 복잡도|특징|
|----------|------------|--------|---|
|선택 정렬|O(N^2)|O(N)|아이디어가 매우 간단하다.|
|삽입 정렬|O(N^2)|O(N)|데이터가 거의 정렬되어 있는 경우에 가장 빠르다.|
|퀵 정렬|O(Nlog N)|O(N)|대부분의 경우에 가장 적합하며, 충분히 빠르다.|
|계수 정렬|O(N + K)|O(N + K)|데이터의 크기가 한정되어 있는 경우에만 사용이 가능하지만 매우 빠르게 동작한다.|
- 대부분의 프로그래밍 언어에서 지원하는 표준 정렬 라이브러리는 최악의 경우에도 O(Nlog N)을 보장하도록 설계되어있기 때문에, 별도로 문제에서 정렬함수를 구현하도록 요구하지 않는다면, 일반적으로 라이브러리를 호출해서 정렬하는 것을 추천한다.


## 문제
- [두 배열의 원소 교체](https://github.com/jinnkimm7/problem-solving/blob/main/java/algorithm/src/algorithm/Sort1.java)
- [백준 정렬](https://www.acmicpc.net/step/9)