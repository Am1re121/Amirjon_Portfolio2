let unit = 4, mass = 2

switch (unit) {
  case 1:
    console.log(mass) 
    break
  case 2:
    console.log(mass / 1000000) 
    break
  case 3:
    console.log(mass / 1000) 
    break
  case 4:
    console.log(mass * 1000) 
    break
  case 5:
    console.log(mass * 100) 
    break
  default:
    console.log("Ошибка: нет такой единицы")
}