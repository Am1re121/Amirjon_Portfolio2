let number = 123;

let hundreds = Math.floor(number / 100);     
let tens = Math.floor((number % 100) / 10);  
let units = number % 10;                       

let newNumber = tens * 100 + hundreds * 10 + units;

console.log(newNumber)