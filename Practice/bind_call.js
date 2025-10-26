let user = {
    name: "Amirjon",
    age: 14,
    job: "student",
    greet: function() {
        console.log('Hello', this.name)
    }
}

let user2 = {
    name: "Alex",
    age: 16,
    job: "developer",
    greet: function() {
        console.log('Developer', this.name)
    }
}

let greet = user2.greet.bind(user)

greet()


let car = {
    brand: "Toyota",
    model: "Camry",
    price: 30000,
    getDetails: function() {
        return 'Toyota' + " " + this.model + " " + this.price
    }
}

let car2 = {
    brand: "Honda",
    model: "Civic",
    price: 25000,
    getDetails: function() {
        return 'Honda' + " " + this.model + " " + this.price
    }
}


console.log(car.getDetails.call(car2))

console.log(car2.getDetails.apply(car))



let calc = {
    num1: 10,
    num2: 20,
    sun: function() {
        return this.num1 + this.num2
    }
}

let calc2 = {
    num1: 10,
    num2: 2,
    sun: function() {
        return this.num1 * this.num2
    }
}

console.log(calc2.sun.call(calc))

