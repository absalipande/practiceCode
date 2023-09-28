function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return 'found the needle at position ' + i;
    }
  }

  return 'needle not found';
}

const haystack = [
  'hay',
  'junk',
  'hay',
  'hay',
  'moreJunk',
  'needle',
  'randomJunk',
];

const result = findNeedle(haystack);
console.log(result);
