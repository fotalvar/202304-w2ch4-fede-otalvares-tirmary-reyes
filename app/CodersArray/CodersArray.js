class CodersArray {
  length = 0;

  constructor(...items) {
    for (const item of items) {
      this[this.length] = item;
      this.length++;
    }
  }

  push(input) {
    this[this.length] = input;
    this.length++;
  }
}

export default CodersArray;
