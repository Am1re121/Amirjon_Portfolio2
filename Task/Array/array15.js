let arr = [1,2,3,4,5,6]
let output = []

for (let i = 0; i < arr.length; i += 2) output.push(arr[i]) // A1,A3,A5
for (let i = arr.length - 1 - (arr.length % 2 === 0 ? 1 : 0); i >= 1; i -= 2) output.push(arr[i]) // A6,A4,A2
console.log(output)