// linear data structure, made up of a sequence of nodes
// more memory allocation
// but instead of havging one pointer, it should have 2 pointers
// it has two pointers, one to the next node, and one to the previous node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  prepend(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node; // replace the head with the node
    }
    this.length++;
  }

  // my version which I didnt account for edge case at tail
  // insertAt(index, data) {
  //   const node = new Node(data);

  //   if (index === 0 || index > this.length) {
  //     return null;
  //   }

  //   if (index == 0) {
  //     if (!this.head) {
  //       this.head = node;
  //       this.tail = node;
  //     } else {
  //       node.next = this.head;
  //       this.head.prev = node;
  //       this.head = node; // replace the head with the node
  //     }
  //   } else {
  //     let i = 0;
  //     let prev = null;
  //     let current = this.head;

  //     while (i < index) {
  //       // index is 2 [1,2,3,4]
  //       // first loop: i is 0, current is now 2, prev is 1, i is 1
  //       // second loop: i is 1, prev is now 2, current is now 3, i is 2
  //       prev = current;
  //       current = current.next; // current would then be
  //       i++;
  //     }
  //     node.next = current;
  //     node.prev = prev;
  //     prev.next = node;
  //     current.prev = node;
  //     this.length++;
  //   }
  // }

  insertAt(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("index is out of range");
    }

    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.length) {
      return this.append(value);
    }

    const node = new Node(value);

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    node.next = current.next;
    node.prev = current;
    current.next.prev = node;
    current.next = node;
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("index is out of range");
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("index is out of range");
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.length) {
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.length--;
  }

  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  printAll() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

module.exports = { DoublyLinkedList, Node };
