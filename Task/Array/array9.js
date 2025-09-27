let arr = [1,2,3,4,5,6]
let even = []

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] % 2 === 0) even.push(arr[i])
}
console.log("Четные:", even, "K =", even.length)