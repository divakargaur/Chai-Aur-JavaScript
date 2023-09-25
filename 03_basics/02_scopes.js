// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// scope => {}, sometimes they say lexical scope

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a); // braces/block scoped
// console.log(b); // braces/block scoped
console.log(c); // that's why people avoid var / global scoped or function scoped



function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username); // no error
    }
    // console.log(website); // error

    two()
}

one()

if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // error
}
// console.log(username); // error



// ++++++++++++++++++ interesting ++++++++++++++++++++++

// declaring a function: method 1
addOne(5)
function addOne(num) {
    return  num + 1
}
addOne(5)

// declaring a function: method 2 (holding it in a variable)
// addTwo(5) // error   ~~~ interesting
const addTwo = function (num) {
    return num + 2 
}
addTwo(5)