const { DoublyLinkedList } = require("./doubly-linked-list");

const list = new DoublyLinkedList();

function findPairSum(nums, target) {
  let seen = new DoublyLinkedList();
  for (const num of nums) {
    const diff = target - num;
    if (seen.contains(diff)) {
      return [diff, num];
    }

    seen.append(num);
  }
  return null;
}

console.log(findPairSum([2, 6, 12, 11, 6, 10], 22));
