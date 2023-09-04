function sumTwoNumbers(arr, target) {
    const numSet = new Set();

    for (let num of arr) {
        const complement = target - num;
        if (numSet.has(complement)) {
            return [num, complement]
        }
        numSet.add(num)
    }

    return null
}

const nums = [2, 7, 11, 15]
const targetSum = 9;

console.log(sumTwoNumbers(nums, targetSum))