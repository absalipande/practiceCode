function longest(s1, s2) {
  let array = (s1 + s2).split('');
  let set = new Set(array);
  let sorted = [...set].sort();

  return sorted.join(' ');
}

console.log(longest('aretheyhere', 'yestheyarehere'));
