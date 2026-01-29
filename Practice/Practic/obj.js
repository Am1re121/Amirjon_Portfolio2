let obj1 = {
    name: "John",
    age: 30
};


Object.seal(obj1);

let obj2 = {
    name: "John",
    age: 30
};

console.log(Object.keys(obj2));


let obj3 = {
    name: "John",
    age: 30
}

Object.getOwnPropertyDescriptors(obj3) = {
    name: {
        value: "John",
        enumerable: true,
        writable: true,
        configurable: true
    },

    age:{
        value: 30,
        enumerable: true,
        writable: true,
        configurable: true
    }
};

console.log(obj3);