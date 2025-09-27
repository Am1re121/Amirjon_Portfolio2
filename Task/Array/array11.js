let arr = [1,2,3,4,5,6,7,8,9]
let K = 3
let output = []

for (let i = K - 1; i < arr.length; i += K) {
  output.push(arr[i])
}
console.log(output)