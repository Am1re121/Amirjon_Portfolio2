let N = 7
let arr = [1, 1]

for (let i = 2; i < N; i++) {
  arr[i] = arr[i-2] + arr[i-1]
}
console.log(arr)