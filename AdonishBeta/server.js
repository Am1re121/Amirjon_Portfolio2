const express = reqiuere('express')
const app = express()
const port = 8080
const path = require("path")
app.use(express.static(__dirname))

let students = [
    {id:1, name: 'Rajabov Abdullo', age: 16, group: "10A", kurs:"Python", grade: {}},
    {id:2, name: 'Saidov Javlon', age: 35, group: "10A", kurs:"Java", grade: {}},
    {id:3, name: 'Sardor Halimov', age: 36, group: "10A", grade: {}},
    {id:4, name: 'Dilshod Shodiev', age: 25, group: "10A", grade: {}},
    {id:5, name: 'Halimov Nusratullo', age: 19, group: "10A", grade: {}},
    {id:6, name: 'Abdulazizov Alisher', age: 30, group: "8V", kurs:"Python", grade: {}},
    {id:7, name: 'Kamoliddinov Kamron', age: 28, group: "8V", kurs:"JavaScript", grade: {}},
    {id:8, name: 'Salomov Mavlon', age: 24, group: "8V", kurs:"JavaScript", grade: {}},
    {id:9, name: 'Umarov Umar', age: 19, group: "8V", kurs:"Java", grade: {}},
    {id:10, name: 'Hokimov Javlon', age: 20, group: "8V", kurs:"Java", grade: {}},
    {id:11, name: 'Sardorov Sardor', age: 22, group: "11B", kurs:"Python", grade: {}},
    {id:12, name: 'Rashidov Rustam', age: 22, group: "11B", kurs:"Python", grade: {}},
    {id:13, name: 'Roibov Jahongir', age: 23, group: "11B", kurs:"Python", grade: {}},
    {id:14, name: 'Rahimov Ramazon', age: 25, group: "11B", kurs:"Python", grade: {}},
    {id:15, name: 'Salomov Muhammad', age: 20, group: "11B", kurs:"Python", grade: {}},
]



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})