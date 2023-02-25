// define a function that takes in a str as parameter
// initialize a variable to store all of the capitalLetters
// initialize a variable to store all of the converted input string
// loop through that variable
// IF the current index === uppercase
// add that current index to the capitalLetters
// return

const returnCapital = (str) => {
  const capitalLetters = [];
  let strArray = str.replace(/[^a-z0-9]/gi, '');

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[i].toUpperCase()) {
      capitalLetters.push(strArray[i]);
    }
  }

  return capitalLetters;
};

console.log(returnCapital('ljFknsUlsdniCnskdKiniMinasinE'))
