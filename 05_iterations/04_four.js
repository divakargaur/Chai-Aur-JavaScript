// forin 

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const prog = ["js", "rb", "py", "java", "cpp"]
for (const key in prog) {
    console.log(key);
    console.log(`${key} index element is ${prog[key]}`);
}



const map = new Map()
map.set('IN', "India")
map.set('IN', "India") // no entry ~ maps are unique
map.set('USA', "United States os America")
map.set('FR', "France")

for (const key in map) {
    console.log(key);
} // maps are not iterable 