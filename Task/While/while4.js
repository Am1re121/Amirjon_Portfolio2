let N = 27
let temp = N
let isPowerOf3 = false

while (temp >= 1) {
  if (temp === 1) {
    isPowerOf3 = true
    break
  }
  if (temp % 3 !== 0) break
  temp /= 3
}
console.log(isPowerOf3)