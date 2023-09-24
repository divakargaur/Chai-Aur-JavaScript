// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// scope => {}, sometimes they say lexical scope

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a); // braces/block scoped
// console.log(b); // braces/block scoped
console.log(c); // that's why people avoid this / global scoped or function scoped


