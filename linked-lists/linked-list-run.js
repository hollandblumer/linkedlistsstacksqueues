const { LinkedList } = require("./linked-lists");

const list = new LinkedList();

list.add(100);
list.add(200);
list.add(300);
list.add(400);

// list.printAll();
// console.log(list.get(2));

list.insertAt(1, "A");
list.removeFrom(1);
list.printAll();
