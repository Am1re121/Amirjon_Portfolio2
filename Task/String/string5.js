let N = 5
let str = ''

for (let i = 0; i < N; i++) {
  str += String.fromCharCode(122 - i) // 'z' = 122
}
console.log(str)