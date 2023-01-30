// define a function that takes in an array and size as parameter
// Create an empty resultArray
// Loop through each element in an input array
// Grab last sub array in resultArray
// IF last sub array doesnt exist OR is same length as size
// Insert new sub array into resultArray
// Push input array element into last sub array

const chunk = (array, size) => {
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const lastItem = resultArray[resultArray.length - 1];
    if (!lastItem || lastItem.length === size) {
      resultArray.push([item]);
    } else {
      lastItem.push(item);
    }
  }

  return resultArray;
};

console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk([0, 1, 2, 3, 4, 5], 4));
