// Immediately Invoked Function Expressions (IIFE)
// to solve the problem of polluting of global scope variables

(function chai() { // named iife
    console.log("DB CONNECTED");
})(); // iife // semicolon to end the "iife" otherwise it will give an error
// chai() // same result

((name) => { // simple iife
    console.log(`DB CONNECTED TWO ${name}`);
})("HITESH");