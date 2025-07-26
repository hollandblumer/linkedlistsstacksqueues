// still can be quadratic in terms of time complexity but there are fewer swaps
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i]; //i = 2 // current = 7
    let j = i - 1; //j = 1

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}

console.log(insertionSort([3, 10, 7, 2, 4, 5]));
