// define a function that takes in a str as parameter
// initialize a variable to store the converted input str
// loop through that variable
// for every index, we are going to use array methods
// return

const reverseEachWord = (str) => {
  const reversedWord = str.split(' ');

  for (let i = 0; i < reversedWord.length; i++) {
    reversedWord[i] = reversedWord[i].split('').reverse().join('');
  }

  return reversedWord.join(' ');
};

console.log(reverseEachWord('Amiel Brencis Salipande'))
