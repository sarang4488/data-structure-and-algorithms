class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }

    return hash % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.buckets[index] || this.buckets[index].key === key) {
      this.buckets[index] = { key: key, val: value };
    } else {
      while (this.buckets[index] !== null) {
        index++;
      }
      this.buckets[index] = { key: key, val: value };
    }
  }

  get(key) {
    const index = this.hash(key);
    for (let i = index; i < this.buckets.length; i++) {
      if (!this.buckets[i]) {
        continue;
      }
      if (this.buckets[i].key === key) {
        return this.buckets[i].val;
      }
    }
    return undefined;
  }
}

const table = new HashTable(100);
table.set("abc", 100);
table.set("cba", 200);
table.set("bac", 200);
console.log(table.get("abc"));
console.log(table.buckets);
