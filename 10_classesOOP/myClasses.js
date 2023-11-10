// After ES6

class User {
    constructor (username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword () {
        return `${this.password}abc`
    }

    changeUsername () {
        return `${this.username.toUpperCase()}`
    }
}

const dev = new User("dev", "dev@dev.com", "123")
console.log(dev.encryptPassword());
console.log(dev.changeUsername());

// behind the scene

function newUser(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

newUser.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

newUser.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const newDev = new newUser("dev", "dev@dev.com", "123")
console.log(newDev.encryptPassword());
console.log(newDev.changeUsername());