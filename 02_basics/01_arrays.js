// array

const myArr = [0, 1, 2, 3, 4, 5]
// resizable 
// 0 based indexing
// arrays are shallow copied
// shallow copy - reference point, changes in the original array
// deep copy - copy

console.log(myArr[0]); // again gets stored like a object

const myHero = ['shaktiman', 'ngaraj']

const myArr2 = new Array(1, 2, 3, 4) // another way to create an array

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

console.log(myArr.includes(9)); // boolean type result
console.log(myArr.indexOf(9)); // -1
console.log(myArr.indexOf(99)); // -1
console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join()

console.log(newArr); // string type
console.log(myArr);

// slice & splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // doesn't changes the original array & doesn't includes 3rd index

console.log(myn1);
console.log("B ", myArr);

const myn2 =  myArr.splice(1, 3) // changes the original array & includes 3rd index

console.log("C", myArr);
console.log(myn2);