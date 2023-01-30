// define a function called 'fizzbuzz'
// initialize a variable to store all of the results
// loop from 1 to 100
// use ternary operations and concatenation
// check if the current number is divisible by 3, return 'fizz'
// check if the current number is divisible by 5, return 'buzz'
// if its both divisible by 3 and 5, return 'fizzbuzz'
// if its either, just console it
// console.table

const fizzbuzz = () => {
  const result = [];

  for (let i = 1; i <= 100; i++) {
    result.push((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
  }
  console.table(result);
};

fizzbuzz()
