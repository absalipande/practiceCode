function alphanumeric(string) {
  let regex = /^[a-z0-9]+$/i;
  return regex.test(string);
}

console.log(alphanumeric('Maziknkaiser'));
console.log(alphanumeric('hello_world'));
