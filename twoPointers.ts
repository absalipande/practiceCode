const findTwoNumbers = (nums: number[], target: number): number[] => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};

// @ts-ignore
const nums = [1, 2, 4, 5, 6, 7, 11, 13, 14];
// @ts-ignore
const target = 9;

const result = findTwoNumbers(nums, target);

if (result.length == 2) {
  console.log(`Two numbers found: ${result[0]}, ${result[1]}`);
} else {
  console.log('No pair of numbers found.');
}
