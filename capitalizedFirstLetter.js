// define a function that takes in a str as parameter
// initialize a variable to store all the converted input string
// return

const capitalized = (str) => {
  let strResult = str.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return strResult.join(' ');
};

console.log(capitalized('amiel brencis salipande'))
