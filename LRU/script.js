/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  } else {
    return -1;
  }
  //   let val = null;
  //   if (this.array.length === 0) return -1;
  //   this.array.forEach((item, index) => {
  //     if (item.hasOwnProperty(key)) {
  //       val = item[key];
  //       this.array.splice(index, 1);
  //       this.array.push({ [key]: val });
  //     } else {
  //       val = -1;
  //     }
  //   });
  //   return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const previousVal = this.get(key);
  if (previousVal === -1) {
    if (this.map.size === this.capacity) {
      for (let firstKey of this.map.keys()) {
        this.map.delete(firstKey);
        break;
      }
    }
  }
  this.map.set(key, value);
  //   if (!this.array.length) {
  //     this.array.push({ [key]: value });
  //   } else {
  //     this.array.forEach((item, index) => {
  //       if (!item.hasOwnProperty(key) && index === this.capacity ) {
  //         if (this.array.length === this.capacity) {
  //           this.array.splice(0, 1);
  //         }
  //         this.array.push({ [key]: value });
  //       } else {
  //         item[key] = value;
  //       }
  //     });

  //   }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lRUCache = new LRUCache(2);
lRUCache.put(2, 6); // 缓存是 {1=1}
lRUCache.put(1, 5); // 缓存是 {1=1, 2=2}

lRUCache.put(1, 2);
console.log(lRUCache.get(1)); // 返回 1

console.log(lRUCache.get(2)); // 返回 -1 (未找到)
