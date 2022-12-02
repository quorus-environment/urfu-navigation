export class LinkedList<T> {
  value: T;
  head: LinkedList<T> | null;
  constructor(value: T, head: LinkedList<T> | null = null) {
    this.head = head;
    this.value = value;
  }
}