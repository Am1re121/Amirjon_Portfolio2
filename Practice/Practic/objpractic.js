let product = {
  title: "Phone",
  price: 1200,
  discount: 10,
  color: "black"
};

for (let key in product) {
 if (key === "price" || key === "discount") {
    product[key] *= 2

 }
}

console.log(product);

let users = [
  {name: "A", age: 20},
  {name: "B", age: 20},
  {name: "C", age: 30}
];

let res = Object.groupBy(users, user => user.age);
console.log(res);

let obj = { a: 1, b: 2, c: 3 };
let res1 = Object.values(obj);
console.log(res1);

let keys = ["name", "age", "city"];
let values = ["Bob", 25, "Rome"];

let res2 = Object.fromEntries(keys.map((key, index) => [key, values[index]]));
console.log(res2);



let data = { a: 5, b: 12, c: 3, d: 40 };

for (let key in data) {
    if (data[key] < 10) {
        delete data[key];
    }
}
console.log(data);

let obj1 = { a: "hi", b: 3, c: "test", d: true };
let count = 0;
for (let key in obj1) {
    if (typeof obj1[key] === "string") {
        count++;
    }
}

console.log(count);

let arr = [["name", "Bob"], ["age", 22], ["city", "Rome"]];
let res3 = Object.fromEntries(arr);
console.log(res3);

let arr1 = [
  {a: 1, b: 2},
  {c: 3},
  {d: 4, a: 10}
];

let res6 = {}
Object.assign(res6, ...arr1);
console.log(res6);

let obj3 = { a: 1, b: 2, c: 1 };
let ews = {}

for (let key in obj3) {
    ews[obj3[key]] = key;
    if (ews[obj3[key]] === values[key]) {
        
    }

}
console.log(ews);
