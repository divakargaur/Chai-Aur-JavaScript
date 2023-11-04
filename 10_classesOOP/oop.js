// Object Literal

const user = {
    username: "DEV",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got User Details");
        // console.log(`Username: ${username}`);
        console.log(`Username: ${this.username}`);
        console.log(`Username: ${this}`); // current context
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // different for browser



// Constructor Function

const promiseOne = new Promise (function () {});
const date = new Date();

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = User("DEV", 12, true);
const userTwo = User("ChaiAurCode", 10, false);
console.log(userOne); // the output will shock you
// that is exactly why we use constructor-function/new

const userThree = new User("DEV", 27, true);
// a new object is created also called as an instance
// we can access the instance with this keyword

console.log(userThree instanceof User);
console.log(userThree instanceof Object);