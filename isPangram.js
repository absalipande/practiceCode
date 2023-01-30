const isPangram = (str) => {
  let char = [];
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      char.push(str[i]);
    }
  }

  return char.size === 26;
};

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram'));
