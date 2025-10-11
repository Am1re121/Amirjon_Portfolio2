// At
let arr = [10, 20, 30, 40, 50]

function showlevl(lv) {
    console.log("Your level:", arr.at(lv));
}

showlevl(2)

//---------------------------------------------

// Every

let arr2 = [2, 4, 6, 8, 10]

function Every() {
    if (arr2.every(item => item % 2 === 0)) {
        console.log("All numbers are even");
    } else {
        console.log("Not all numbers are even");
    }
}


//----------------------------------------------

// Fill

let arr3 = [1, 2, 3, 4, 5]

function fill(yourfill) {
    arr3.fill(yourfill, 1, 4)
    console.log(arr3);
}

fill(0)

//----------------------------------------------

// Find

let arr4 = ['apple', 'banana', 'grape', 'avocado', 'kiwi']

function find(yourfind) {
    let found = arr4.find(item => item === yourfind);
    console.log(found);
}

find('avocado')

//----------------------------------------------

// Flat
let arr5 = [1, 2, [3, 4], [5, 6, [7, 8]]]

function deleterarr(amouthdeleter) {
    let flattened = arr5.flat(amouthdeleter);
    console.log(flattened);
}

deleterarr(2)

//----------------------------------------------

// Includes

let arr6 = ['cat', 'dog', 'bird', 'fish']

function includes(yourincludes) {
    if (arr6.includes(yourincludes)) {
        console.log(`${yourincludes} is in the array`);
    } else {
        console.log(`${yourincludes} is not in the array`);
    }
}

includes('dog')

//----------------------------------------------

// Join

let arr7 = ['Hello', 'world', 'this', 'is', 'JavaScript']

function join(yourjoin) {
    let joined = arr7.join(yourjoin);
    console.log(joined);
}

join(' ')

//----------------------------------------------

// Map

let arr8 = [yourmap]

function map(...yourmap) {
    let mapped = arr8.map(item => item * 2);
    console.log(mapped);
}

map(5)


//---------------------------------------

// Filter

let arr9 = ['apple', 'banana', 'grape', 'avocado', 'kiwi']

function filter(yourfilter) {
    let filtered = arr9.filter(yourfilter);
    console.log(filtered);
}

filter(item => item.startsWith('a'))

//---------------------------------------

// Slice

let arr10 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function slice(start, end) {
    let sliced = arr10.slice(start, end);
    console.log(sliced);
}

slice(2, 5)

//---------------------------------------

console.log("Practice/zadacha_15arr_15obj.js")