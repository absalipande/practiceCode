const findLongestSubstring = (str) => {
  let longest = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char] >= start) {
      start = seen[char] + 1;
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i;
  }

  return longest;
};

console.log(findLongestSubstring('abcdefgabcbb'));
