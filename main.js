const express = require('express')
const app = express()

let cotegory = [
    {category: "Новостройки"},
    {category: "Недвижимость"},
    {category: "Недвижимость"},
    {category: "Транспорт"},
    {category: "Вакансии"},
    {category: "Телефоны и связь"},
    {category: "Детский мир"},
    {category: "Одежда и личные вещи"},
    {category: "Компьютеры и оргтехника"},
    {category: "Электроника и бытовая техника"},
    {category: "Всё для дома"},
    {category: "Строительство, сырье и ремонт"},
    {category: "Хобби, музыка и спорт"},
    {category: "Животные и растения"},
    {category: "Услуги"},
    {category: "Для бизнеса"}
    {category: "Отдам даром"}    
]


app.get("/cotegory/:category",(req,res)=>{
    let result = cotegory.filter(cotegory => cotegory.category.toLowerCase() === req.params.category.toLowerCase())
    res.send(result)
})


app.listen(8080,()=>{
    console.log("Server is running:8080")
})


