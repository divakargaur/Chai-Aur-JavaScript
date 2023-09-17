const accountId  = 144553
let accountEmail = "xyz@mail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // this is also a variable, however don't use this
let accountState // this is undefined

// accountId = 2 // not allowed

// {} - this is scope

accountEmail = "hys@mail.com"
accountPassword = "24235355"
accountCity = "bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])