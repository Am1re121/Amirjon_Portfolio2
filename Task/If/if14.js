let a = 5, b = 9, c = 3

let min = a
if (b < min) {
  min = b
}
if (c < min) {
  min = c
}

let max = a
if (b > max) {
  max = b
}
if (c > max) {
  max = c
}

console.log("Наименьшее =", min, "Наибольшее =", max)