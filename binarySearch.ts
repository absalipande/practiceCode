const binarySearch = (arr: number[], target: number): number => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

const arr: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 19, 24, 25];
// @ts-ignore
const target = 7;

const index = binarySearch(arr, target);
if (index !== -1) {
  console.log(`Element found at index: ${index}`);
} else {
  console.log('Element not found in the array.');
}
