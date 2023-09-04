function findMissingNumber(arr, n) {
  const totalSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return totalSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5], 5));

