let price = 12.5

for (let kg = 0.1; kg <= 1; kg += 0.1) {
  console.log(kg.toFixed(1), "кг =", (kg * price).toFixed(2))
}