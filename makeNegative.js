function makeNegative(num) {
  let absolute = Math.abs(num);
  let negative = absolute * -1;
  return negative;
}

console.log(makeNegative(42));
