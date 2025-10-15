export function arraytest(arr) {
    while (arr > 0) {
        arr -= 1;
        console.log(arr);
    }
    return arr;
}


function zamikanie() {
    let a = 0;
    function inner() {
        a += 1;
        console.log(a);
    }
}