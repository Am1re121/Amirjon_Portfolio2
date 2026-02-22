const express = require('express');
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname)));

let students = [
    {id:1, name: 'Karim Benzema', age: 35, class: "9A", grade: {
        Math: 4,
        English: 4,
        Science: 5,
        History: 5
    }},
    {id:2, name: 'Komil Cheburek', age: 22, class: "10B", grade: {
        Math: 2,
        English: 3,
        Science: 3,
        History: 2
    }},
    {id:3, name: 'Sardor Halimov', age: 36, class: "10B", grade: {
        Math: 5,
        English: 4,
        Science: 5,
        History: 4
    }},
    {id:4, name: 'Dilshod Shodiev', age: 25, class: "10B", grade: {
        Math: 3,
        English: 4,
        Science: 2,
        History: 3
    }},

    {id:5, name: 'Adonish Admin', age: 19, class: "9A", grade: {
        Math: 5,
        English: 5,
        Science: 5,
        History: 5
    }},

    {id:6, name: 'Aziz Zizov', age: 30, class: "9A", grade: {
        Math: 4,
        English: 3,
        Science: 4,
        History: 3
    }},

    {id:7, name: 'Sardorbek Samarov', age: 28, class: "8V", grade: {
        Math: 3,
        English: 4,
        Science: 3,
        History: 4
    }},

    {id:8, name: 'Shahzod Behzov', age: 24, class: "8V", grade: {
        Math: 4,
        English: 5,
        Science: 4,
        History: 5
    }}
]

app.get('/students/:name', (req, res) => {
    const studentName = req.params.name.trim().toLowerCase();
    const Subject = req.query.subject;
    const student = students.find(s => s.name.toLowerCase() === studentName.toLowerCase());
        if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }

    if (Subject === "all") {
        return res.json({ grade: student.grade });
    } else if (Subject === "math") {
        return res.json({ Math: student.grade.Math});
    } else if (Subject === "english") {
        return res.json({ English: student.grade.English});
    } else if (Subject === "science") {
        return  res.json({ Science: student.grade.Science});
    } else if (Subject === "history") {
        return res.json({ History: student.grade.History});
    }


});

app.get('/students', (req, res) => {
   const className = req.query.class;

   if (!className) {
       return res.status(400).json({ error: "Class not provided" });
   }

   const filteredStudents = students.filter(student =>
       student.class.toLowerCase() === className.toLowerCase()
   );

   if (filteredStudents.length === 0) {
       return res.status(404).json({ error: "Students not found" });
   }

   return res.json(filteredStudents.map(s => ({ name: s.name }))); 
});


app.get('/', (req, res) => {
    res.json({ message: "Welcome to Adonish!" });
})


app.listen(port, () => {
    console.log(`Adonish is running on port ${port}`);
})