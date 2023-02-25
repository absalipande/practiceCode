function divide(dividend, divisor) {
  // check if the params are valid
  if (dividend < 0 || divisor <= 0) {
    throw new Error(
      'Invalid parameters. Dividend and divisor must be a non-negative and non-zero'
    );
  }
  // initialize the quotient variable
  let quotient = 0;

  // loop until the dividend is less than the divisor
  while (dividend >= divisor) {
    dividend -= divisor;
    quotient++;
  }

  // if there is a non-zero remainder, append a suffix 'r' to the quotient
  if (dividend > 0) {
    quotient += 'r' + dividend;
  }

  return `${quotient}`;
}

console.log(divide(10, 2));
console.log(divide(15, 4));
console.log(divide(7, 11));
