let D = 31, M = 12
let days

switch (M) {
  case 2:
    days = 28
    break
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30
    break
  default:
    days = 31
}

if (D < days) {
  D = D + 1
} else {
  D = 1
  if (M < 12) {
    M = M + 1
  } else {
    M = 1
  }
}
console.log(D, M)