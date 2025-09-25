let number = 472;

let units = number % 10;                   
let firstTwo = Math.floor(number / 10);      

let newNumber = units * 100 + firstTwo;

console.log(newNumber)