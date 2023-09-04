// function areAnagrams(str1, str2) {
//   const sortedStr1 = str1.toLowerCase().split('').sort().join('');
//   const sortedStr2 = str2.toLowerCase().split('').sort().join('');
//   return sortedStr1 === sortedStr2;
// }

function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  let map = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];

    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (!map[char] || map[char] === 0) {
      return false;
    } else {
      map[char]--;
    }
  }

  return true;
}

console.log(areAnagrams('listen', 'silent'));
