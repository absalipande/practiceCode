// const isPangram = (str) => {
//   str = str.toLowerCase();
//   let char = new Set();

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(/[a-z]/i)) {
//       char.add(str[i]);
//     }
//   }

//   return char.size === 26;
// };

const isPangram = (str) => {
  str = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i = 0; i < alphabet.length; i++) {
    if (!str.includes(str[i])) {
      return false;
    }
  }

  return true;
};

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram'));
