const score = 400
console.log(score);

const balance = new Number(100) // to define specific type
console.log(balance);

console.log(balance.toString()); // changing the type to string
console.log(balance.toFixed(2)); // precising to two decimals

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // precising again but not with decimals

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // for beutifull representation of 0's
console.log(hundreds.toLocaleString('en-IN')); // .toLocalString() is a property & also a function (function stored as a property)



// ++++++++++++++++++++++ MATH +++++++++++++++++++++++++

console.log(Math); // again an object
console.log(Math.abs(-4)); // 4
console.log(Math.abs(4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

// the thing we will use
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.random(Math.random() * (max - min + 1)) + min);