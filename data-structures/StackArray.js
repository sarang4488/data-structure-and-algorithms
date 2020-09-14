class StackArray {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

const stack1 = new StackArray();
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1.toArray());
stack1.pop();
console.log(stack1.toArray());
