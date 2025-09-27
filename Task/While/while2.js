let A = 17, B = 3
let count = 0
let length = A

while (length >= B) {
  length -= B
  count++
}
console.log("Количество отрезков:", count)