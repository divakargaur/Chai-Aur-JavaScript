// Primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol & BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // false

const bigNumber = 21735217527157432n // last me "n" for defining it as BigInt


// Reference (Non Primitive)
// Arrays, Objects, Functions

// JS is dynamically typed language

const heroes = ["shaktimaan", "naagraaj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber); // BigInt
console.log(typeof null); // object
console.log(typeof function(){}); // function
console.log(typeof myFunction); // function

// return type of array - object
// return type of symbol - symbol
// return type of undefined - undefined 

// return type of reference (non primitive) - object (mostly)
// return type of function - (object) function



// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive / Reference)

// Stack : ek ke upar ek
// Heap : reference - like a box - only one data - change will effect everything

let myYoutubeName = "hiteshchoudhary"
let anotherName = myYoutubeName // same|
anotherOther = myYoutubeName //    same|

anotherName = "chaiorcode" 
anotherOther = "chaiorcode"

console.log(anotherOther);
console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);