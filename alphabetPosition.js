const alphabetPosition = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    const position = alphabet.indexOf(char) + 1;

    if (position > 0) {
      result.push(position);
    }
  }

  return result.join(' ');
};

console.log(alphabetPosition('never gonna give you up'));
