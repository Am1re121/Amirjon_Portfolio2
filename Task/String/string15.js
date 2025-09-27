let S = "Hello мир"
let count = 0

for (let i = 0; i < S.length; i++) {
  let code = S.charCodeAt(i)
  if ((code >= 97 && code <= 122) || (code >= 1072 && code <= 1103)) count++
}
console.log("Количество строчных букв:", count)