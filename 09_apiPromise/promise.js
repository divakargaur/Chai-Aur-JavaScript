// new -> for new instance
const promiseOne = new Promise (function (resolve, reject) {
    // do an async task
    // db calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve();
    }, 1000);
})

promiseOne.then(function () {
    console.log("Promise consumed");
})



new Promise (function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Promise 2");
})



const promiseThree = new Promise (function (resolve, reject) {
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})



const promiseFour = new Promise (function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username: "Chai", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 2000);
})

promiseFour.then(user => {
    console.log(user);
    return user.username;
}).then(username => {
    console.log(username);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})



const promiseFive = new Promise (function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "JavaScript", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 2000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUsers();



fetch("https://api.github.com/users/divakargaur")   // in priority queue rather than normal/task queue
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => console.log(error))

// error 404, etc. gets resolved (it is also a response from network)