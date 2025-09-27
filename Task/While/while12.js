let N = 15
let sum = 0
let K = 0

while (sum + (K + 1) <= N) {
  K++
  sum += K
}
console.log("K =", K, "Сумма =", sum)