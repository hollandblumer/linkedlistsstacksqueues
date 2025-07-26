const { DoublyLinkedList } = require("./doubly-linked-list");

const list = new DoublyLinkedList();

list.append(200);
list.append(300);
list.append(400);

list.prepend(100);
list.insertAt(2, "Hi");
// list.printAll();
// console.log(list.get(2));

//list.printAll();
console.log(list.length);
list.remove(2);
list.printAll();
console.log(list.length);

//console.log(list.get(0).data);

console.log(list.contains(400));
console.log(list.contains(600));
