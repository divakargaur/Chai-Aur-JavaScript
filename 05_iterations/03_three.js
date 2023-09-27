/* these loops are mainly for arrays */

// forof

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}



// maps

const map = new Map()
map.set('IN', "India")
map.set('IN', "India") // no entry ~ maps are unique
map.set('USA', "United States os America")
map.set('FR', "France")

console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    'game1': "NFS",
    'game2': "Spiderman"
}
/*
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
*/ // myObject is not iterable
