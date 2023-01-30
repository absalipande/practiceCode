const countWords = (str) => {
  // This Object will be used to store the count of each word in the input string.
  const wordResults = {};
  const arrOfWords = str.split(' ');

  for (const word of arrOfWords) {
    wordResults[word] = (wordResults[word] || 0) + 1;
  }

  return wordResults;
};

console.log(countWords('hello here and hello there'));
