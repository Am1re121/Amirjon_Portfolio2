let S = "H3ll0W0rld"
let count = 0

for (let i = 0; i < S.length; i++) {
  if (S[i] >= '0' && S[i] <= '9') count++
}
console.log("Количество цифр:", count)