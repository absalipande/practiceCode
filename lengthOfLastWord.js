const lengthOfLastWord = (str) => {
  const words = str.trim().split(' ');
  return words[words.length - 1].length;
};

console.log(lengthOfLastWord('Amiel Brencis Salipande'));

// const lengthOfLastWordTwo = (str) => {
//   let lastIndex = str.length - 1;
//   let count = 0;

//   while (lastIndex >= count) {
//     if (str[lastIndex] === ' ' && count > 0) {
//       return count;
//     } else if (str[lastIndex] !== '') {
//       count++;
//     }
//     lastIndex--;
//   }
// };

const lengthOfLastWordTwo = (str) => {
  let lastIndex = str.length - 1;
  let count = 0;

  while (lastIndex >= count) {
    if (str[lastIndex] === ' ' && count > 0) {
      return count;
    } else if (str[lastIndex] !== ' ') {
      count++;
    }
    lastIndex--;
  }
};

console.log(lengthOfLastWordTwo('Amiel Brencis Salipande'));
