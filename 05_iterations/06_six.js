const prog = ["js", "rb", "py", "java", "cpp"]

const values = prog.forEach(element => {
    console.log(element);
    return element // does not matter
});

console.log(values); // forEach ~ don't return values



// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

let newNums2 = myNums.filter( (num) => {
    // num > 4 // braces scoped
    return num > 4
})
console.log(newNums2);


// same thing with forEach
newNums.forEach(element => {
    if (element > 4) {
        newNums.push(element)
    }
});
console.log(newNums); // to get desired output, comment the above code 


// books example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter( (bk) => bk.genre === "History") // if you open braces/scope then make sure to return the value
console.log(userBooks);

const userBooks2 = books.filter( (bk) => bk.publish >= 2000)
console.log(userBooks2);