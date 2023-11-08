// JavaScript does not give up
// we can say that everything in JS is an object
// array -> object -> null
// string -> object -> null
// function -> object -> null

function multiplyFive(num) {
    return num * 5;
}

multiplyFive.power = 2

console.log(multiplyFive(5));
console.log(multiplyFive.power);
console.log(multiplyFive.prototype);



function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()



/*
new keyword
-----------
> a new object is created
> a property is linked
> the constructor is called
> the new object is returned
*/