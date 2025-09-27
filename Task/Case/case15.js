let N = 12, M = 4
let name, suit

switch (N) {
  case 6: name = "Шестёрка"; break
  case 7: name = "Семёрка"; break
  case 8: name = "Восьмёрка"; break
  case 9: name = "Девятка"; break
  case 10: name = "Десятка"; break
  case 11: name = "Валет"; break
  case 12: name = "Дама"; break
  case 13: name = "Король"; break
  case 14: name = "Туз"; break
  default: name = "Ошибка"
}

switch (M) {
  case 1: suit = "пик"; break
  case 2: suit = "треф"; break
  case 3: suit = "бубен"; break
  case 4: suit = "червей"; break
  default: suit = "Ошибка"
}

console.log(name, suit)