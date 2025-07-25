const { LinkedList } = require("../linked-lists");
const findMiddle = require("./find-middle");

const list = new LinkedList();
list.add(2);
list.add(3);
list.add(4);
list.add(5);

findMiddle(list);

console.log(findMiddle(list).data);
