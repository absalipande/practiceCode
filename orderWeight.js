function orderWeight(string) {
  let numWeight = string.split(' ');

  let sumDigits = (num) => {
    let sum = 0;
    let numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr[i], 10);
      sum += digit;
    }

    return sum;
  };

  numWeight.sort((a, b) => {
    let sumA = sumDigits(a);
    let sumB = sumDigits(b);

    if (sumA === sumB) {
      return a.localeCompare(b);
    } else {
      return sumA - sumB;
    }
  });

  return numWeight.join(' ');
}

console.log(orderWeight('103 123 4444 99 2000'), '2000 103 123 4444 99');
console.log(
  (orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'),
  '11 11 2000 10003 22 123 1234000 44444444 9999')
);
