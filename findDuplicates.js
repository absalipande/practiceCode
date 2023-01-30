/*
Problem:
Write a function 'findDuplicates' that takes in an array of numbers and return an array
of all the numbers that appear more than once in the input array.
The returned array should not contain any duplicates, and the numbers in the returned
array should be in the order they first appeared in the input array.
*/

// define a function that takes in (arr)
// declare seen as an empty object {}
// declare duplicates as an empty array []
// iterate through the arr.length
// IF the current index is not yet a key in seen{}
// set that current index = true
// else if the current index is not in the duplicates[]
// add the current index to duplicates array
// return duplicates

const findDuplicates = (arr) => {
  let seen = {};
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
    } else if (!duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }

  return duplicates;
};

console.log(findDuplicates([1, 2, 3, 1, 2, 3]));
console.log(findDuplicates([1, 2, 3, 4]));
console.log(findDuplicates([1, 1, 2, 2, 3, 3, 3]));
