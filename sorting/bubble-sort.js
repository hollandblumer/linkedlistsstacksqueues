function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));

function bubbleSort2(arr) {
  let swapped = false;

  while (!swapped) {
    swapped = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = false;
      }
    }
  }
  return arr;
}
console.log(bubbleSort2([5, 1, 4, 2, 8]));
