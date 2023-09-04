function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map((word) => word.split('').reverse().join(''));
  return reversedWords.join(' ');
}

console.log(reverseWords('Hello world'));
