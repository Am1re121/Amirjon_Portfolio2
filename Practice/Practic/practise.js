// Остаточные параметры (rest parameters)

function sum(...numbers) {
  let total = 0
  for (let num of numbers) {
    total += num
  }
  return total
}

console.log(sum(1, 2, 3))      // 6
console.log(sum(5, 10, 15, 20))

// Оператор расширение (spread operator)

let arr1 = [1, 2, 3]
let arr2 = [...arr1, 4, 5]

console.log(arr2)


let a = [1, 2]
let b = [3, 4]
let c = [...a, ...b]

console.log(c)


function add(x, y, z) {
  return x + y + z
}

let nums = [1, 2, 3]
console.log(add(...nums))


// Date

let now = new Date()
console.log(now)

let date1 = new Date("2025-12-31")
console.log(date1)  


let d = new Date("2025-09-27T15:45:30")

console.log("Год:", d.getFullYear())   
console.log("Месяц:", d.getMonth())    
console.log("День месяца:", d.getDate())
console.log("День недели:", d.getDay())  
console.log("Часы:", d.getHours())     
console.log("Минуты:", d.getMinutes()) 
console.log("Секунды:", d.getSeconds())