const frequencyAnalysis = (str) => {
  let newObj = {};
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (!newObj[currentChar]) {
      newObj[currentChar] = 1;
    } else {
      newObj[currentChar]++;
    }
  }

  return newObj;
};

console.log(frequencyAnalysis('HIII'));
