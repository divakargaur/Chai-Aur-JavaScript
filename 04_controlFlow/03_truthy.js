const userEmail = "h@hitesh.ai"

if (userEmail) {
    console.log("Got user Email");
}
else {
    console.log("Don't have user Email");
}

/* 
FALSY VALUES
------------
1. 0
2. false
3. undefined
4. null
5. NaN
6. ""
7. document.all
*/

/* Everything else is TRUTHY */
/* "0", 'false', " ", [], {}, function(){} */

const user = []
if (user.length === 0) {
    console.log("Array is Empty");
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is Empty");
}

console.log(false == 0); // true
console.log(false == ''); // true
console.log('' == 0); // true



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20 // 10

console.log(val1);



// Terniary Operator (?)

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// condition ? true : false