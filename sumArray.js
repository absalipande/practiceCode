const sumArray = (num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }

  return sum;
};

console.log(sumArray([1, 2, 3]))
console.log(sumArray([4, 5, 6]))
