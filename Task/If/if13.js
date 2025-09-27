let a = 5, b = 7, c = 6

let mid

if ((a <= b && b <= c) || (c <= b && b <= a)) {
  mid = b
} else if ((b <= a && a <= c) || (c <= a && a <= b)) {
  mid = a
} else {
  mid = c
}

console.log("Среднее =", mid)