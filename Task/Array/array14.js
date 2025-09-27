let arr = [1,2,3,4,5,6]
let output = []

for (let i = 1; i < arr.length; i += 2) output.push(arr[i]) 
for (let i = 0; i < arr.length; i += 2) output.push(arr[i]) 
console.log(output)