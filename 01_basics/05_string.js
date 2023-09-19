const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value"); // outdated syntax
// hitesh50 Value

// backticks - ``, string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc')
// it will be stored as an object

console.log(gameName[0]); // this is an object, 0 is a key here
console.log(gameName.__proto__); // to call/see the whole prototype

console.log(gameName.length); // 8
console.log(gameName.toUpperCase()); // () because it is an already defined function, haven't changed anything in the original memory/data - stack(primary)

console.log(gameName.charAt(2)); // to see the character at nth position

console.log(gameName.indexOf('t')); // to see the index of a particular character

const newString = gameName.substring(0, 4) // can not give negative values
console.log(newString); // hite

const anotherString = gameName.slice(-8, 4) // can give negative values
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); // again () because it is a function

const url = "https://hitesh.com/hitesh%20choudhary"
// const url = "https://hitesh.com/hitesh choudhary" will become -
// const url = "https://hitesh.com/hitesh%20choudhary" browser does this

// to convert/replace it
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh')); // true
console.log(url.includes('sundar')); // false

console.log(gameName.split('-')); 
// [ 'hitesh', 'hc' ]