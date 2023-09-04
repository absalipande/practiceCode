/* 
Problem:
Write a function 'isPalindrome' that takes in a string and returns 'true' if
the string is a palindrome and 'false' if it is not. 
The function should be case-senstivie and should ignore any spaces or punctuations in the string
*/

const isPalindrome = (str) => {
  str = str.replace(/[^a-z0-9]/gi, '');
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

console.log(isPalindrome('race a car'));
console.log(isPalindrome(''));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
