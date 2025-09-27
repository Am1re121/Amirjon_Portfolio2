let a = 5, b = 9, c = 3

let min = a
if (b < min) {
  min = b
}
if (c < min) {
  min = c
}

let sum = a + b + c - min

console.log("Сумма двух наибольших =", sum)