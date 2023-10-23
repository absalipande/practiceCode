const romanToInt = (str) => {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let next = str[i + 1];

    if (symbols[current] < symbols[next]) {
      total -= symbols[current];
    } else {
      total += symbols[current];
    }
  }

  return total;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
