// also divide and conquer algorithm
// you pick a pivot point and partition 2 subaarrays based on whether they are less than or greater than the pivot
// pivot points are typically the last or first element
// quick sort space complexity is O(logn)
// const randomIndex = Math.floor(Math.random() * arr.length);

function quicksort(arr) {
  let pivot = arr[arr.length - 1];
  if (arr.length === 0) {
    return;
  }
}
