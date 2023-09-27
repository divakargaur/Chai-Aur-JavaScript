// forEach ~ higher order function

const prog = ["js", "rb", "py", "java", "cpp"]

prog.forEach(element => { // first way
    console.log(element);
});

prog.forEach(function (element) { // second way
    console.log(element);
});


function printMe(element) { // third way
    console.log(element);
}
prog.forEach(printMe)


prog.forEach( (element, index, arr) => {
    console.log(element, index, arr); // interesting
})



const myCoding = [
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "java",
        fileName: "java"
    },
    {
        languageName: "python",
        fileName: "py"
    }
]

myCoding.forEach(element => {
    console.log(element.languageName);
})