function setUsername(username) {
    this.username = username;
}

function createUser(username, email, password) {
    setUsername(username);  // -> simply being called
    setUsername.call(username);  // -> for holding the reference
    // but after being called the reference of the function is popped(getting removed)
    setUsername.call(this, username);
    // the function will give all objects/references to the function it is being called in
    this.email = email;
    this.password = password;
}

const dev = new createUser("dev", "dev@dev.com", "123")
console.log(dev);