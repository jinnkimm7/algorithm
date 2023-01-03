// https://school.programmers.co.kr/learn/courses/30/lessons/42587

// 1. queue 구현해서 풀기
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.head) return null;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead.value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();

  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (queue.size > 0) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count++;
      if (location === value[1]) return count;
    }
  }

  return count;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));