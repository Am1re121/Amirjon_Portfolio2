let N = 5
let prod = 1

for (let i = 1; i <= N; i++) {
  prod *= 1 + i / 10
}
console.log("Произведение:", prod)