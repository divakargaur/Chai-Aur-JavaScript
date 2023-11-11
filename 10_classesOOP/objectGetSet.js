const User = {
    _email: "dev@ai",
    _password: "dev",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}

const dev = Object.create(User)
console.log(dev.email);