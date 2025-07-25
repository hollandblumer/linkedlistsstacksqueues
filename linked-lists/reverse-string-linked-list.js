const { LinkedList } = require("./linked-lists");

function reverseString(str) {
  const list = new LinkedList();
  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str[i]);
  }

  let current = list.head;
  let result = "";

  while (current !== null) {
    result += current.data;
    current = current.next;
  }

  return result;
}

module.exports = reverseString;
