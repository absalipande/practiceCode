function longestSubstringWithoutRepeating(str) {
  let longest = '';
  let current = '';
  for (let char of str) {
    if (current.includes(char)) {
      current = current.slice(current.indexOf(char) + 1);
    }
    current += char;
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}

console.log(longestSubstringWithoutRepeating('abcabcbb'));
