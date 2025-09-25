let number = 472;

let hundreds = Math.floor(number / 100);    
let tens = Math.floor((number % 100) / 10);   
let units = number % 10;                      

let sum = hundreds + tens + units;            
let product = hundreds * tens * units; 

console.log(sum)
console.log(product)    
