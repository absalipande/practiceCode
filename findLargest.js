/* Problem:
Write a function 'findLargest' that takes in an array of numbers and returns the 
largest number in the array. If the array is empty, the function should 
return 'null'

Write the function in a way that minimizes the number of comparisons
*/

// Pseudocode
// Define a variable 'findLargest' (arr)
// IF arr.length === 0
//     return null
// Initialize a variable and set it to the first element of the arr -> arr[0];
// Iterate over each element by starting at the second element arr[1]
//  if the current element arr[0] is greater than largest
//      then set it to the current element arr[0]
// return largest

const findLargest = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  const largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest === arr[i];
    }
  }

  return largest;
};

console.log(findLargest([1, 2, 3, 4, 5]));
console.log(findLargest([5, 4, 3, 2, 1]));
console.log(findLargest([-1, -2, -3, -4, -5]));
console.log(findLargest([]));
