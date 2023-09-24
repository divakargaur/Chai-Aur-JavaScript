function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");    
}
sayMyName()


// function addTwoNumbers(number1, number2) { // parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4) // arguments
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result); // undefined

function addTwoNumbers(number1, number2) {
    return number1 + number2 // correct syntax, you should return the value
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result); // returned values don't print automatically



function loginUserMessage(username) { // username = "sam" ~ at least the value is "sam" and can be overwritten
    if (username === undefined) { // !username ~ another way to write
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage()); // undefined just logged in 



function calculateCartPrice(val1, val2, ...number1) {  // rest operator or spread operator
    return number1 
}
console.log(calculateCartPrice(200, 400, 600, 800, 1000));
// val1 = 200, val2 = 400



const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({ // no need to define the object beforehand
    username: "sam",
    price: 399
})



const myNewArray = [200, 400, 600, 800]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 500, 700]));



