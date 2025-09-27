let num = 1, value = 5
let a, c, h, S

switch (num) {
  case 1: a = value; break
  case 2: c = value; a = c / Math.sqrt(2); break
  case 3: h = value; c = 2 * h; a = c / Math.sqrt(2); break
  case 4: S = value; c = Math.sqrt(2 * S); a = c / Math.sqrt(2); h = c / 2; break
  default: console.log("Ошибка"); a = 0; c = 0; h = 0; S = 0
}

if (!c) c = a * Math.sqrt(2)
if (!h) h = c / 2
if (!S) S = c * h / 2
console.log("a =", a, "c =", c, "h =", h, "S =", S)