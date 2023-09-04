function add(a, b) {
  let result = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const numA = i >= 0 ? parseInt(a[i]) : 0;
    const numB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = numA + numB + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result;
}

console.log(add('123', '456'), '579');
console.log(add('888', '222'), '1110');
