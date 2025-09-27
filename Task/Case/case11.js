let C = "С", N1 = 1, N2 = -1

function turn(C, N) {
  switch (C) {
    case "С":
      switch (N) { case 1: return "З"; case -1: return "В"; case 2: return "Ю"; default: return C }
    case "Ю":
      switch (N) { case 1: return "В"; case -1: return "З"; case 2: return "С"; default: return C }
    case "З":
      switch (N) { case 1: return "Ю"; case -1: return "С"; case 2: return "В"; default: return C }
    case "В":
      switch (N) { case 1: return "С"; case -1: return "Ю"; case 2: return "З"; default: return C }
    default:
      return "Ошибка направления"
  }
}

C = turn(C, N1)
C = turn(C, N2)
console.log(C)