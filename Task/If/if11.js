let A = 5, B = 7
if (A !== B) {
  let max = A > B ? A : B
  A = max
  B = max
} else {
  A = 0
  B = 0
}
console.log("A =", A, "B =", B)