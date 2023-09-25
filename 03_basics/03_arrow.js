const user ={
    username: "hitesh",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`); // "this" creates current context
        console.log(this); // prints the object/context
    }
}
user.welcomeMessage()

user.username = "sam"
user.welcomeMessage()

console.log(this); // {}


function chai() {
    let username = "hitesh"
    console.log(this); // kuch bakwaas
    console.log(this.username); // undefined
}
chai()


const chai2 = function () {
    let username = "hitesh"
    console.log(this); // kuch bakwaas
    console.log(this.username); // undefined
}
chai2()


const chai3 = () => { // arrow function
    let username = "hitesh"
    console.log(this); // {}
    console.log(this.username); // undefined
}
chai3()


// arrow function
const addTwo2 = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo2(3, 4));


// implicit 
const addTwo3 = (num1, num2) => num1 + num2
console.log(addTwo3(3, 4));

// one more implicit
const addTwo4 = (num1, num2) => (num1 + num2)
console.log(addTwo4(3, 4));

// in case of object
const addTwo5 = (num1, num2) => ({username: "hitesh"})
console.log(addTwo5(3, 4));

// different ways of writing
const myArray = [2, 5, 3, 7, 8]
myArray.forEach(() => {})
myArray.forEach(() => ({}))
myArray.forEach(function () {})