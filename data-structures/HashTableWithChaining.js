class HashTableWithChaining {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
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
    const bucketArray = this.buckets[index];

    const storedElement = bucketArray.find((element) => {
      return element.key === key;
    });
    if (storedElement) {
      storedElement.val = value;
    }
    bucketArray.push({ key: key, val: value });
  }

  get(key) {
    const index = this.hash(key);
    const bucketArray = this.buckets[index];
    const storedElement = bucketArray.find((element) => {
      return element.key === key;
    });

    return storedElement;
  }
}

const table = new HashTableWithChaining(10);
table.set("abc", 100);
table.set("cba", 200);
console.log(table.get("abc"));
console.log(table.buckets);
