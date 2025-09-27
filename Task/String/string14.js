let S = "Hello WORLD"
let count = 0

for (let i = 0; i < S.length; i++) {
  if (S[i] >= 'A' && S[i] <= 'Z') count++
}
console.log("Количество заглавных:", count)