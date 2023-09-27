const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumber.map(element => element + 10) // if you open braces/scope make sure to return 
console.log(newNums);



// chaining ~ using two or more methods

const newNums2 = myNumber
                        .map(element => element * 10)
                        .map(element => element + 1)
                        .filter(element => element >= 40)

console.log(newNums2);