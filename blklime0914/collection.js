class Collection {
  #arr;
  constructor(...args) {
    this.#arr = (this.#isStack()) ? args[0] : [...args];
  }

  get _arr() {
    return this.#arr;
  }
  toString() {
    if (this.#isStack()) {
      return this.#arr.join(',');
    }

    return `[${this.#arr.sort().join()}]`;
  }
  clear() {
    this._arr.length = 0;
  }
  get isEmpty() {
    return this._arr.length === 0;
  }
  #isStack() {
    return this.constructor.name === 'Stack';
  }

  iterator() {
    return this[Symbol.iterator]();
  }  
  
  *[Symbol.iterator]() {
    for (let i = this._arr.length - 1; i >= 0; i -= 1) {
      yield this._arr[i];
    }
  }
}

export class Stack extends Collection {
  push(v) { 
    this._arr.push(v);
    return this;
  }

  pop() {
    return this._arr.pop();
  }

  get peek() {
    return this._arr[this._arr.length - 1];
  }
  
  get poll() {
    return this._arr.pop();
  }
  
  get size() {
    return this._arr.length;
  }
}

export class Queue extends Collection {
  enqueue(v) {
    this._arr.unshift(v);
    return this;
  }

  dequeue() {
    return this._arr.shift();
  }  
  
  get peek() {
    return this._arr[0];
  }  
  
  *[Symbol.iterator]() {
    for (let i = 0; i < this._arr.length; i -= 1) {
      yield this._arr[i];
    }
  }
}

export class ArrayList extends Collection {
  add(val, idx) {}

  remove(val) {}

  indexOf(val) {}

  set(idx, val) {}

  get(val) {}

  contains(val) {}

  toList() {}

  static listToArray(list) {}
  static arrayToList(arr) {}

  toString() {
    return ArrayList.arrayToList(this._arr);
  }
}
