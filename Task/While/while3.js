let N = 17, K = 3
let quotient = 0
let remainder = N

while (remainder >= K) {
  remainder -= K
  quotient++
}
console.log("Частное:", quotient, "Остаток:", remainder)