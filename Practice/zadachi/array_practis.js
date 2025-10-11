let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function chetniye(arr) {
    arr = arr.filter(arr => arr % 2 == 0)
    console.log(arr)
}

chetniye(arr)

let arrwords = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'banana']

function lishnie(arrwords) {
    let result = []
    if(arrwords === 'banana') {
        arrwords.push(result)
    }
    console.log(arrwords)
}

lishnie(arrwords)

function reduce(arr) {
    let sum = arr.reduce((acc, rec) => acc + rec, 0)
    console.log(sum)
}

reduce(arr)


let arrnum = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10]

function polozh(arrnum) {
    arrnum = arrnum.map((arrnum) => arrnum > 0)
    console.log(arrnum)
}

polozh(arrnum)


function includes(arrwords) {
    arrwords = arrwords.includes('b')
    console.log(arrwords)
}
includes(arrwords)