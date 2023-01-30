// How to check if an object is array or not
const greet = (param) => {
  if (typeof param !== 'string') {
    return false;
  }

  return true;
};

console.log(greet([1, 2, 3, 4, 5]));

// How to empty an array in JS
const arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
arrayList.splice(0, arrayList.length);
console.log(arrayList);

// How would you check if a number is an integer
const isInteger = (num) => {
  return num % 1 === 0;
};

console.log(isInteger(4));
console.log(isInteger(12.2));
console.log(isInteger(0.3));

// Duplicate
const duplicate = (arr) => {
  return arr.concat(arr);
};

console.log(duplicate([1, 2, 3, 4, 5]));

// Write a 'mul' function which will properly when invoked
function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));

// Write a function that would allow you to do this
function createBase(baseNumber) {
  return function (N) {
    return baseNumber + N;
  };
}

const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

// fizzbuzz challenge
const fizzbuzz = () => {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    result.push((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
  }
  console.table(result);
};

fizzbuzz();

// Anagrams
const firstWord = 'Mary';
const secondWord = 'Army';

const isAnagram = (first, second) => {
  return (
    first.toLowerCase().split('').sort().join('') ===
    second.toLowerCase().split('').sort().join('')
  );
};

console.log(isAnagram(firstWord, secondWord));
