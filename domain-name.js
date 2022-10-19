// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:



// always a string, 1 string, no spaces, any symbol, never empty
// str-> string, no spaces, console log the string, exact same outputed

function domainName(url){
  return url.replace('https://','').replace('http://','').replace('www.','').split('.')[0]
  // replace the stuff upfront
  
  //split and grab the first value 
}


console.log(domainName("http://github.com/carbonfive/raygun"), "github")
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites")
console.log(domainName("https://www.cnet.com"), "cnet")