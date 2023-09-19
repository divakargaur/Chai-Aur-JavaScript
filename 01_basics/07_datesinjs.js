let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString()); // sabse bhadiya
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toDateString());
// Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString());
// 1/23/2023, 5:03:00 AM
let myNewDate = new Date("01-14-2023");
console.log(myNewDate.toLocaleString());
// 1/14/2023, 12:00:00 AM
let againDate = new Date("2023-01-14");
console.log(againDate.toLocaleString());
// 1/14/2023, 12:00:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// string inerpolation or backticks
// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
}) // for further personilisation