// define a function that takes in arr as parameter
// initialize a variable to store the length of arr
// loop through that variable
// for every index, we are going to push it to the arr
// return

const duplicateCount = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    arr.push(arr[i]);
  }

  return arr;
};

console.log(duplicateCount([1, 2, 3, 4, 5]))