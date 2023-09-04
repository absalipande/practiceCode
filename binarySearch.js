function binarySearchjs(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }

  return left;
}

console.log(binarySearchjs([1, 2, 3, 5, 7, 9], 5));
