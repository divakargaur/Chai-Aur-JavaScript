// reduce
const myNums = [1, 2, 3, 4]

// first way
const myTotal = myNums.reduce((acc, currVal) => (acc + currVal), 0)
console.log(myTotal);

// second way
const myTotal2 = myNums.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} currVal: ${currVal}`);
    return acc + currVal
}, 0)
console.log(myTotal2);


const shoppingCart = [
    {
        course: "js",
        price: 2999
    },
    {
        course: "py",
        price: 2999
    },
    {
        course: "rb",
        price: 2999
    },
    {
        course: "go",
        price: 2999
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

console.log(totalPrice);