let num = 1, value = 6
let a, R1, R2, S

switch (num) {
  case 1: a = value; break
  case 2: R1 = value; a = R1 * 6 / Math.sqrt(3); break
  case 3: R2 = value; a = R2 * 3 / Math.sqrt(3); break
  case 4: S = value; a = Math.sqrt(S * 4 / Math.sqrt(3)); break
  default: console.log("Ошибка"); a = 0
}

if (!R1) R1 = a * Math.sqrt(3) / 6
if (!R2) R2 = 2 * R1
if (!S) S = a * a * Math.sqrt(3) / 4
console.log("a =", a, "R1 =", R1, "R2 =", R2, "S =", S)