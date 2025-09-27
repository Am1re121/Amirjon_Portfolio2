let S = "Hello"
let str = ''

for (let i = 0; i < S.length; i++) {
  str += S[i]
  if (i < S.length - 1) str += ' '
}
console.log(str)