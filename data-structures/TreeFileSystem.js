const QueueLinkedList = require("./QueueLinkedList");
class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value) {
    const segments = value.split("/");
    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }

    const isExistingNode = this.children.find(
      (node) => node.value === segments[0]
    );
    if (isExistingNode) {
      isExistingNode.addNode(segments.slice(1).join("/"));
    } else {
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join("/"));
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }
  }

  removeNode(value) {
    const segments = value.split("/");
    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const existingNodeIndex = this.children.findIndex(
        (child) => child.value === segments[0]
      );

      if (existingNodeIndex < 1) {
        throw new Error("No matching value found");
      } else {
        this.children.splice(existingNodeIndex, 1);
      }
    }

    if (segments.length > 1) {
      const existingNode = this.children.find(
        (child) => child.value === segments[0]
      );
      if (!existingNode) {
        throw new Error(
          "No matching value found for path segment" + segments[0]
        );
      }

      existingNode.removeNode(segments.slice(1).join("/"));
    }
  }

  findDFS(value) {
    for (const child of this.children) {
      if (child.value === value) {
        return child;
      }

      const nestedChildNode = child.findDFS(value);
      if (nestedChildNode) {
        return nestedChildNode;
      }
    }

    return null;
  }

  findBFS(value) {
    for (const child of this.children) {
      if (child.value === value) {
        return child;
      }
    }

    for (const child of this.children) {
      const nestedChildNode = child.findBFS(value);
      if (nestedChildNode) {
        return nestedChildNode;
      }
    }

    return null;
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  add(path) {
    this.root.addNode(path);
  }

  remove(path) {
    this.root.removeNode(path);
  }

  find(value) {
    if (this.root.value === value) {
      return this.root;
    }
    return this.root.findBFS(value);
  }

  findWithQueue(value) {
    const queue = new QueueLinkedList();
    const root = this.root;
    queue.enqueue(root);

    while (!queue.isEmpty()) {
      let length = queue.size();
      while (length > 0) {
        const node = queue.dequeue();
        for (const child of node.value.children) {
          if (child.value === value) {
            return child;
          } else {
            queue.enqueue(child);
          }
        }
        length--;
      }
    }
    return null;
  }
}

const fileSystem = new Tree("/");
fileSystem.add("documents/personal/results.txt");
fileSystem.add("games/cod.exe");
fileSystem.add("games/cod2.exe");
fileSystem.remove("games/cod2.exe");

// console.log(fileSystem.root.children);
console.log(fileSystem.findWithQueue("personal"));
