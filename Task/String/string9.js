let N = 6, C1 = 'X', C2 = 'O'
let str = ''

for (let i = 0; i < N; i++) {
  str += (i % 2 === 0) ? C1 : C2
}
console.log(str)