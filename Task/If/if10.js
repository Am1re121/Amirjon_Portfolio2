let A = 5, B = 7
if (A !== B) {
  let sum = A + B
  A = sum
  B = sum
} else {
  A = 0
  B = 0
}
console.log("A =", A, "B =", B)