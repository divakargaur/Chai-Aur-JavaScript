class User {
    constructor (username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor (username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const dev = new Teacher("dev", "dev@dev.com", "123")
dev.addCourse()

const newDev = new User("newDev")
newDev.logMe()
dev.logMe()

console.log(dev instanceof Teacher);
console.log(newDev instanceof Teacher);
console.log(dev instanceof User);
console.log(newDev instanceof User);