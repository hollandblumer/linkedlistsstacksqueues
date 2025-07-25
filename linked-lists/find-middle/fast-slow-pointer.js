// // in js, pointers can be used it's just not explicit
// let a = 1;
// let b = a;
// a = 2;

// // see below how the way you assign a variable is different with objects and arrays than it is with primitive values
// // so when you set d to c, youre setting it to the reference
// let c = { name: "john" };
// let d = c;
// c.name = "brad";

// console.log(d.name);

// nodes are objects so they are passed by reference
// idea is 2 pointers start at the same spot, but one moves faster than the other at twice the speed of the slower pointer

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}
