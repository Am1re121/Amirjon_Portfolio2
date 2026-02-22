const express = reqiuere('express')
const app = express()
const port = 8080
const path = require("path")
app.use(express.static(__dirname))

let students = [
    {id:1, name: 'Rajabov Abdullo', age: 16, group: "10A", kurs:"Python", grade: {}},
    {id:2, name: 'Saidov Javlon', age: 35, group: "9A", kurs:"Java", grade: {}},
    {id:3, name: 'Sardor Halimov', age: 36, group: "10B", grade: {}},
    {id:4, name: 'Dilshod Shodiev', age: 25, group: "10B", grade: {}},
    {id:5, name: 'Halimov Nusratullo', age: 19, group: "11A", grade: {}},
    {id:6, name: 'Abdulazizov Alisher', age: 30, group: "10A", kurs:"Python", grade: {}},
    {id:7, name: 'Kamoliddinov Kamron', age: 28, group: "8V", kurs:"JavaScript", grade: {}},
    {id:8, name: 'Salomov Mavlon', age: 24, group: "8V", kurs:"JavaScript", grade: {}},
    {id:9, name: 'Umarov Umar', age: 19, group: "9A", kurs:"Java", grade: {}},
    {id:10, name: 'Hokimov Javlon', age: 20, group: "9A", kurs:"Java", grade: {}},
]



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})