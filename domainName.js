function domainName(url) {
    url = url.replace('https://', '')
    url = url.replace('http://', '')
    url = url.replace('www.',' ')

    return url.split('.')[0]
}

console.log(domainName('http://google.com'));
console.log(domainName('https://youtube.com'));
