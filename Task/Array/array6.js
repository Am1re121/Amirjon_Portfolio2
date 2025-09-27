let N = 5, A = 1, B = 2
let arr = [A, B]

for (let i = 2; i < N; i++) {
  let sum = 0
  for (let j = 0; j < i; j++) {
    sum += arr[j]
  }
  arr[i] = sum
}
console.log(arr)