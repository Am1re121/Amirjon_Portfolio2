let S = "Hello", N = 3
let str = ''

for (let i = 0; i < S.length; i++) {
  str += S[i]
  if (i < S.length - 1) str += '*'.repeat(N)
}
console.log(str)