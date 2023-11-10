class User {
    constructor (username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }

    static createID() {
        return `123`
    }
}

const dev = new User("dev")
// console.log(dev.createID()) -> will give error because of static keyword

class Teacher extends User {
    constructor (username, email) {
        super(username)
        this.email = email
    }
}

const newDev = new Teacher("newDev", "dev@dev.com")
newDev.logMe()