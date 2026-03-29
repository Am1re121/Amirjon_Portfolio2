function Num(n) {
    this.n = n;
}

Num.prototype.double = function () {
    return this.n * 2;
};

let num1 = new Num(5);
console.log(num1.double());



const animal1 = {
  sound: "Some sound"
};

const cat = Object.create(animal1);
cat.sound = "Meow";

console.log(cat.sound);      
console.log(animal1.sound);


function fruit() {
    type() {
        console.log("mango");
    }
}

function price() {
    cook() {
        console.log("100");
    }
}

fruit.__proto__ = price;

fruit.price();

let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

function User(name) {
    this.name = name;
}

User.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};

let u1 = new User("Ali");
u1.sayHello();


function Animal(type) {
    this.type = type;
}

Animal.prototype.showType = function () {
    console.log(this.type);
};

let ad = new Animal("Cat");
ad.showType();


function Car(brand) {
    this.brand = brand;
}

Car.prototype.drive = function () {
    console.log(this.brand + " is driving");
};

let c1 = new Car("BMW");
c1.drive();


function Person(age) {
    this.age = age;
}

Person.prototype.showAge = function () {
    console.log(this.age);
};

let p1 = new Person(20);
p1.showAge();


function Book(title) {
    this.title = title;
}

Book.prototype.read = function () {
    console.log("Reading " + this.title);
};

let b1 = new Book("JS");
b1.read();


function Dog(name) {
    Animal.call(this, "Dog");
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.eat = function () {
    console.log(this.name + " is eating");
};


let a1 = { x: 10 };
let a2 = {};
let a3 = {};
a2.__proto__ = a1;
a3.__proto__ = a2;
console.log(a3.x);


Array.prototype.last = function () {
    return this[this.length - 1];
};
let arr = [1,2,3];
console.log(arr.last());


String.prototype.up = function () {
    return this.toUpperCase();
};
console.log("hi".up());


function Flag(v) {
    this.v = v;
}
Flag.prototype.toggle = function () {
    return !this.v;
};
let f = new Flag(true);
console.log(f.toggle());


let protoObj = { say: function(){console.log("hi");} };
let newObj = Object.create(protoObj);
newObj.say();


function A(){}
let a = new A();
console.log(a instanceof A);


function Animal(name){
    this.name=name;
}

Animal.prototype.say = function(){
    console.log(this.name);
};

function Dog(name){
    Animal.call(this,name);
}

Dog.prototype = Object.create(Animal.prototype);

let d = new Dog("Rex");
d.say();



