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
        const odd = args.filter(num => num % 2 !== 0);
        return fn(...odd);
            
        
    }
}

let decsun = decoratorsun(sum)

console.log(decsun(1,2,3,4,5))
