function order(words) {
  const wordArray = words.split(' ');
  const sortedWords = [];

  for (let i = 1; i <= wordArray.length; i++) {
    const foundWord = wordArray.find((word) => word.includes(i));

    sortedWords.push(foundWord);
  }

  return sortedWords.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
