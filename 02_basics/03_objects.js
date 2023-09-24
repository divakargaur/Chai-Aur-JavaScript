// singleton
// Object.create ~ cnstructor method


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "hitesh",
    "full name": "hitesh choudary", // interesting
    // mySym: "mykey1",
    [mySym]: "mykey1", // correct syntax
    age : 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full name"]);
// console.log(JsUser.mySym); // but this is a string
console.log(JsUser[mySym]); // correct syntax

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // to freeze the value
// JsUser.email = "hitesh@microsoft.com" // will not give error but it will not change
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting); // [Function (anonymous)]
// console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); // Hello JS User, hitesh \n undefined


// myArray = ["h", "i"]