const { text } = require("express")

function sum() {
    let i=0
    let counter=0
    while (i < arguments.length) {
        counter+=arguments[i]
        i++
    }
    return counter
}

function decoratorsun(fn) {
    return function(...args) {
        const nechet = args.filter(num => num % 2 !== 0);
        return fn(...nechet);
            
    }
}

let decsun = decoratorsun(sum)

console.log(decsun(1,2,3,4,5))


function DecoratorPractice(fn) {
    return function(txt) {
        console.log("decorator cool")
        return fn(txt)
    }
}


function decprac() {
    console.log("Decorator Practice")
}

let result = DecoratorPractice(decprac)

result()

