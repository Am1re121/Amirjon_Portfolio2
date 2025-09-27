let A = 2
let sum = 0
let K = 0

while (sum + 1 / (K + 1) < A) {
  K++
  sum += 1 / K
}
console.log("K =", K, "Сумма =", sum)