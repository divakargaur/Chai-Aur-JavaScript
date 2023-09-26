const isUserLoggedIn = true
const temperature = 41

if (isUserLoggedIn) {
    console.log("IF");
}
else {
    console.log("ELSE");
}

// "=" ~ assigning operator
// "==" ~ equality  operator
// "===" ~ strict euqal / type checking operator



const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // error  



// short hand notation
const balance = 1000
if (balance < 500) console.log("test"), console.log("test2");; // not a good way of writing


if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 900) {
    console.log("less than 900");
}
else {
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false 
const loggedInFromEmail = true 

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In");
}