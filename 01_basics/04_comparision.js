// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// beacuse equality check & comparisions work differently 
// comparisions convert null to a number, treating it as 0
// thus equality check after comparision is giving this answer
// simply, "JS, hahahahahahahaha"

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

console.log("2" == 2); // false