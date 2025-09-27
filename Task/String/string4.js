let N = 5
let str = ''

for (let i = 0; i < N; i++) {
  str += String.fromCharCode(65 + i) // 'A' = 65
}
console.log(str)