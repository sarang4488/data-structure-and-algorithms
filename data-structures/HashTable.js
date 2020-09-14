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
    const index = this.hash(key);
    this.buckets[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.buckets[index];
  }
}

const table = new HashTable(100);
table.set("abc", 100);
table.set("dfg",200);
console.log(table.get("abc"));
console.log(table.buckets);
