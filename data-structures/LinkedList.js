class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  delete(value) {
    //1,1,2,3,4,5,8
    if (!this.head) {
      return;
    }

    //delete head and if multiple head values
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    // start deleting from 2nd element
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    //update the tail if tail deleted
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedItem = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedItem;
  }

  toArray() {
    const elements = [];
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(3);
linkedList1.append(4);
linkedList1.append(5);
linkedList1.append(6);
linkedList1.append(6);
linkedList1.append(6);

linkedList1.insertAfter(11, 3);
linkedList1.delete(1);
linkedList1.delete(6);
linkedList1.delete(4);

module.exports = LinkedList;
