let C = "С", N = -1

switch (C) {
  case "С":
    switch (N) {
      case 0: console.log("С"); break
      case 1: console.log("З"); break
      case -1: console.log("В"); break
      default: console.log("Ошибка команды")
    }
    break
  case "Ю":
    switch (N) {
      case 0: console.log("Ю"); break
      case 1: console.log("В"); break
      case -1: console.log("З"); break
      default: console.log("Ошибка команды")
    }
    break
  case "З":
    switch (N) {
      case 0: console.log("З"); break
      case 1: console.log("Ю"); break
      case -1: console.log("С"); break
      default: console.log("Ошибка команды")
    }
    break
  case "В":
    switch (N) {
      case 0: console.log("В"); break
      case 1: console.log("С"); break
      case -1: console.log("Ю"); break
      default: console.log("Ошибка команды")
    }
    break
  default:
    console.log("Ошибка направления")
}