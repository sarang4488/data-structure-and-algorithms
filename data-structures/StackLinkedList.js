const LinkedList = require("./LinkedList");

class StackLinkedList {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray();
  }
}

const stack1 = new StackLinkedList();
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1.toArray());
stack1.pop();
console.log(stack1.toArray());
