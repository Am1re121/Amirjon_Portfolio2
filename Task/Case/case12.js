let num = 1, value = 7
let R, D, L, S
const pi = 3.14

switch (num) {
  case 1: R = value; break
  case 2: R = value / 2; break
  case 3: R = value / (2 * pi); break
  case 4: R = Math.sqrt(value / pi); break
  default: console.log("Ошибка"); R = 0
}

D = 2 * R
L = 2 * pi * R
S = pi * R * R
console.log("R =", R, "D =", D, "L =", L, "S =", S)