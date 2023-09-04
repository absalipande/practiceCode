function domainName(url) {
  let hostname = url.replace(/(https?:\/\/)?(www\.)?/, '');
  let domain = hostname.split('.')[0];

  return domain;
}

console.log(domainName('http://google.com'));
console.log(domainName('https://youtube.com'));
