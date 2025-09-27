let arr = [1,2,3,4,5,6]
let output = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) output.push(arr[i])
}
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] % 2 !== 0) output.push(arr[i])
}
console.log(output)