let N = 5
let sum = 0

for (let i = 1; i <= N; i++) {
  sum += ((i % 2 === 0) ? -1 : 1) * (1 + i / 10)
}
console.log("Сумма:", sum)