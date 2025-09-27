let price = 12.5

for (let kg = 1.2; kg <= 2; kg += 0.2) {
  console.log(kg.toFixed(1), "кг =", (kg * price).toFixed(2))
}