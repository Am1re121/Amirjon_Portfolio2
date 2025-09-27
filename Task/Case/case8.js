let D = 1, M = 3

if (D > 1) {
  D = D - 1
} else {
  switch (M) {
    case 1:
      D = 31
      M = 12
      break
    case 2:
      D = 31
      M = 1
      break
    case 3:
      D = 28
      M = 2
      break
    case 5:
    case 7:
    case 10:
    case 12:
      D = 30
      M = M - 1
      break
    default:
      D = 31
      M = M - 1
  }
}
console.log(D, M)