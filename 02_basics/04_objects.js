// const tinderUser = new Object() // singleton object
const tinderUser = {}

console.log(tinderUser); // empty object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

// optional chaining
// console.log(regularUser.fullname?.userfullname?.firstname?);


const obj1 =  {1: "a", 2: "b"}
const obj2 =  {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} // same array problem

const obj3 = Object.assign({}, obj1, obj2) // correct way to merge
// the first one is the target "{}", and next ones are the source, all of them get store in the target
console.log(obj3);

const obj4 = {...obj1, ...obj2} // best way to spread
console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
] // array of objects

console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // array datatype
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // array in array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check if the property is available or not



const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor
const {courseInstructor} = course // aonther way
const {courseInstructor: ins} = course
console.log(ins);



// const navbar = ({company}) => {} // destructuring
// navbar(company = "hitesh")



// API ~ apna kaam kisi aur ke sar pe daal dena
// value are in json
// {
//     "name": "hitesh",
//     "consumeName": "js in hindi",
//     "price": "free"
// }
// [
//     {},
//     {},
//     {}
// ]
