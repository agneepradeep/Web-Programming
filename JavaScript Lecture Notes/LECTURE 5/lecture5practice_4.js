//Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array
//Use the reduce method to calculate product of all numbers in the array

const n = 10
let arr = []
for(let i = 1;i<=10;i++){
    arr.push(i);
}   
let sum = arr.reduce((prev,curr) => {
    return prev+curr
})

let product = arr.reduce((prev,curr) => {
    return prev*curr
})