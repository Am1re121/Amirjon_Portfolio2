const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Hello World!</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>My name  is Amirjon, i am 14</h1>")
})

app.get("/contacts",(req,res)=>{
    res.send("<ul><li>Name: Alex</li><li>Phone number: +998901234567</li> <li> Name: Tom</li> <li>Phone number:+992 918445567</li></ul>")
})
app.listen(8080,()=>{
    console.log("Server is running:8080")
})


