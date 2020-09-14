class QueueArray {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.unshift(value);
  }

  dequeue() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

const queue1 = new QueueArray();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.dequeue();
console.log(queue1.toArray());
