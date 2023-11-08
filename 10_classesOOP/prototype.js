// let myName = "  DEV  "
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderMan"]

let heroPower = {
    thor: "hammer",
    spiderMan: "sling",

    getSpiderPower: function () {
        console.log(`Spider power is ${this.spiderMan}`);
    }
}

Object.prototype.dev = function () {
    // we are giving it to object
    console.log(`dev is present in all objects`);
}

Array.prototype.heyDev = function () {
    console.log(`dev says hello`);
}

heroPower.dev();
myHeros.dev();

// heroPower.heyDev(); -> will give an error
myHeros.heyDev();



// INHERITANCE

const user = {
    name: "dev",
    email: "dev@dev.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)



let anotherUserName = "  DEV  "

String.prototype.trueLength = function () {
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()