let P = 5 // процент
let S = 1000
let K = 0

while (S <= 1100) {
  S = S * (1 + P / 100)
  K++
}
console.log("Месяцев:", K, "Итоговый вклад:", S.toFixed(2))