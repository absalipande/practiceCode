function scramble(str1, str2) {
  let charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (charCount[char] > 0) {
      charCount[char]--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));
console.log(scramble('scriptjavx', 'javascript'));
console.log(scramble('scriptingjava', 'javascript'));
console.log(scramble('scriptsjava', 'javascripts'));
console.log(scramble('javscripts', 'javascript'));
console.log(scramble('jscripts', 'javascript'));
console.log(scramble('aabbcamaomsccdd', 'commas'));
console.log(scramble('commas', 'commas'));
console.log(scramble('sammoc', 'commas'));
