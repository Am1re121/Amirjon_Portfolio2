let N = 20
let K = 0
let power = 1

while (power * 3 < N) {
  power *= 3
  K++
}
console.log("Наибольшее K:", K)