const LinkedList = require("./LinkedList");

class QueueLinkedList {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  size() {
    const array = this.list.toArray();
    return array.length;
  }

  toArray() {
    return this.list.toArray();
  }
}

const queue1 = new QueueLinkedList();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.dequeue();
console.log(queue1.toArray());

module.exports = QueueLinkedList;
