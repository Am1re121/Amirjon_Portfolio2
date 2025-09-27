let unit = 2, length = 1.5

switch (unit) {
  case 1:
    console.log(length / 10) 
    break
  case 2:
    console.log(length * 1000) 
    break
  case 3:
    console.log(length) 
    break
  case 4:
    console.log(length / 1000) 
    break
  case 5:
    console.log(length / 100)
    break
  default:
    console.log("Ошибка: нет такой единицы")
}