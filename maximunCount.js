const maximumCount = (nums) => {
  let positive = 0;
  let negative = 0;

  for (let num of nums) {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    }
  }

  return Math.max(positive, negative);
};

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximumCount([5, 20, 66, 1314]));
