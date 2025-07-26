//O(nlogn)
//cutting subarrays in half, then cutting those subarrays in half
// recursion
// merge sort space complexity is O(n)
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([3, 10, 7, 2, 4, 5]));
