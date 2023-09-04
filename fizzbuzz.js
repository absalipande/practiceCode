// define a function called 'fizzbuzz'
// initialize a variable to store all of the results
// loop from 1 to 100
// use ternary operations and concatenation
// check if the current number is divisible by 3, return 'fizz'
// check if the current number is divisible by 5, return 'buzz'
// if its both divisible by 3 and 5, return 'fizzbuzz'
// if its either, just console it
// console.table


// function fizzbuzz() {
//   let finalOutput = '';

//   for (let i = 1; i <= 100; i++) {
//     let output = '';

//     switch (true) {
//       case i % 15 === 0:
//         output += 'FizzBuzzWho';
//         break;
//       case i % 3 === 0 && i % 5 === 0:
//         output += 'FizzBuzz';
//         break;
//       case i % 3 === 0:
//         output += 'Fizz';
//         break;
//       case i % 5 === 0:
//         output += 'Buzz';
//         break;
//       case i % 7 === 0:
//         output += 'Bang';
//         break;
//       default:
//         output = i;
//     }

//     finalOutput += output + '\n';
//   }

//   return finalOutput;
// }

function fizzbuzz() {
  let finalOutput = '';

  for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 15 === 0) {
      output += 'FizzBuzzWho'
    }

    if (i % 3 === 0 && i % 5 === 0) {
      output += 'FizzBuzz';
    } else if (i % 3 === 0) {
      output += 'Fizz'
    } else if (i % 5 === 0) {
      output += 'Buzz'
    } else if (i % 7 === 0) {
      output += 'Bang'
    } else {
      output = i;
    }
    finalOutput += output + '\n'
  }

  return finalOutput
}

console.log(fizzbuzz());
